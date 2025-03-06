// 카탈로그
import { useState } from "react";
import ListPage from "../components/ListPage";
import Warn from "../components/Warn";
import CourseItem from "../components/CourseItem";
import { getCourses } from "../api";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { useSearchParams } from "react-router-dom";

// path의 파라미터 useParams
// query string은 useSearchParams
function CourseListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  const courses = getCourses(initKeyword);

  // const [keyword, setKeyword] = useState("");
  // const courses = getCourses(); // api의 index.js에서 가져옴
  // const courses = getCourses(searchParams.get("keyword")); // 검색창에 키워드 입력하면 관련 코스들이 뜸

  // 다른 검색어로 바꾸면 state도 그에 따라서 바뀌도록
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // 클릭 이벤트가 발생했을 때 페이지가 리로드 되는 것을 막아줌
    setSearchParams(keyword ? { keyword } : {});
  };

  return (
    <ListPage
      variant="catalog"
      title="모든 코스"
      description="자체 제작된 코스들로 기초를 쌓으세요."
    >
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 코스 찾기"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {courses.length}개 코스</p>

      {courses.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.courseList}>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
