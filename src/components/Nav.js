import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";
// NavLink: Link와 달리 스타일을 추가할 수 있다
import { Link, NavLink } from "react-router-dom";

const getLinkStyle = ({ isActive }) => {
  // 현재 경로가 Link to에 써있는 경로와 같으면 true
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
};

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        {/* Link를 통해 로고 클릭시 홈으로 이동 */}
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>

        <ul className={styles.menu}>
          {/* <li style={{ padding: 10 }}> */}
          {/* 클릭시 main에서 지정한 CourseListPage로 이동 */}
          {/* <Link to="/courses">카탈로그</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/* main에서 라우트하지 않으면 빈화면 */}
          {/* <Link to="/questions">커뮤니티</Link> */}
          {/* </li> */}

          {/* NavLink 사용으로 스타일추가 */}
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>

          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
