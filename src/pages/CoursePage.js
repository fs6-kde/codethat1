// 카탈로그 -> 각 코스 페이지
import { addWishlist, getCourseBySlug } from "../api";
import Button from "../components/Button";
import Container from "../components/Container";
import Card from "../components/Card";
import CourseIcon from "../components/CourseIcon";
import getCourseColor from "../utils/getCourseColor";
import styles from "./CoursePage.module.css";

import { Navigate, useNavigate, useParams } from "react-router-dom";

function CoursePage() {
  // courseSlug 사용: 일일이 path를 쓰지 않아도 한번에 코스 출력 가능
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);
  // 일일이 Main에서 각 코스마다 path를 써야함
  // const course = getCourseBySlug("react-frontend-development");

  const courseColor = getCourseColor(course?.code);

  // 코스담기하면 바로 위시리스트 갈 수 있게
  const navigate = useNavigate();

  // 리다이렉트: 존재하지 않는 courseSlug 입력하면(aaaa 같이) 바로 CoursePage로 돌아올 수 있게
  // * 를 써도 같다.
  if (!course) {
    return <Navigate to="/courses" />; // 렌더링하는 시점에 동시에 기존 페이지로 리다이렉트 하고 싶을때
  }

  const headerStyle = {
    borderTopColor: courseColor,
  };

  const handleAddWishlistClick = () => {
    addWishlist(course?.slug);

    // 페이지는 다 렌더링이 된 시점에 유저가 원하는 곳으로 바로 이동하고 싶을 때
    navigate("/wishlist");
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
