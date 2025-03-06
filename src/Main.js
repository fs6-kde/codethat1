// // 라우터 사용
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import App from "./components/App";
// import HomePage from "./pages/HomePage";
// // import CourseListPage from "./pages/CourseListPage";
// import CourseListPage from "./pages/CourseListPage";
// import CoursePage from "./pages/CoursePage";
// import WishlistPage from "./pages/WishlistPage";

// function Main() {
//   return (
//     // 임포트한 라우터로 감싼다
//     <BrowserRouter>
//       <App>
//         <Routes>
//           {/* <HomePage /> */}
//           {/* <CourseListPage /> */}

//           <Route path="/" element={<HomePage />} />

//           {/* <Route path="courses" element={<CourseListPage />} />

//           <Route
//             path="courses/react-frontend-development"
//             element={<CoursePage />}
//           /> */}

//           {/* 위 둘을 중첩해서 입력하자. 중첩해서 사용할 때는 닫는 태그 따로 입력 */}
//           <Route path="courses">
//             {/* 주의: path="/" 가 아니라 index(또는 ={true})로 적어야함 */}
//             <Route index element={<CourseListPage />} />
//             <Route path="react-frontend-development" element={<CoursePage />} />
//           </Route>

//           <Route path="wishlist" element={<WishlistPage />} />
//         </Routes>
//       </App>
//     </BrowserRouter>
//   );
// }

// export default Main;

// ----------------------------------------------------------------------------------------

// 모든 라우트를 App과 중첩시킴
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import WishlistPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />

            {/* useParams와 변수로 모든 코스 출력 가능하게 */}
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />

          {/* QuestionPage의 useParams로 모든 질문글들 접근가능하게 */}
          {/* <Route path="questions" element={<QuestionListPage />} /> */}
          {/* <Route path="questions/:questionId" element={<QuestionPage />} /> */}
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>
        </Route>
        {/* localhost:3000/hello 이런식으로 치면 존재하지 않는 페이지라고 뜸 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
