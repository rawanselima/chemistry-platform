import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Courses from "./pages/Courses";
import DetailsCourse from "./pages/DetailsCourse";
import UserProfile from "./pages/UserProfile";
import UserCourses from "./pages/UserCourses";
import DetailsUserCourses from "./pages/DetailsUserCourses";
import Videos from "./compontents/detailsUserCourse/Videos";
import Homeworks from "./compontents/detailsUserCourse/Homeworks";
import Files from "./compontents/detailsUserCourse/Files";
import Exams from "./compontents/detailsUserCourse/Exams";
import UserExam from "./pages/UserExam";
import ResultExam from "./pages/ResultExam";
import UserHomework from "./pages/userHomework";
import ResultsHomeWork from "./pages/ResultsHomework";
import UserVideos from "./pages/UserVideos";
import Community from "./pages/Community";
import UserLayout from "./pages/userLayout";
import Receipt from "./pages/Receipt";
import LayoutCourses from "./pages/LayoutCourses";
import AllExamResults from "./pages/AllExamResults";
import AllHomeworkResults from "./pages/AllHomeworkResults";
import TeacherLayout from "./pages/TeacherLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "courses/:id",
          element: <DetailsCourse />,
        },
      ],
    },
    {
      path: "userProfile",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <UserProfile />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "receipt",
          element: <Receipt />,
        },
        {
          path: "examResults",
          element: <AllExamResults />,
        },
        {
          path: "homeworkResults",
          element: <AllHomeworkResults />,
        },
        {
          path: "course/:id",
          element: <LayoutCourses />,
          children: [
            {
              path: "",
              element: <DetailsUserCourses />,
              children: [
                {
                  index: true,
                  element: <Videos />,
                },
                {
                  path: "homework",
                  element: <Homeworks />,
                },
                {
                  path: "files",
                  element: <Files />,
                },
                {
                  path: "exams",
                  element: <Exams />,
                },
              ],
            },
            {
              path: "exams/:id",
              element: <UserExam />,
            },
            {
              path: "resultExam/:id",
              element: <ResultExam />,
            },
            {
              path: "homework/:id",
              element: <UserHomework />,
            },
            {
              path: "resultHomework/:id",
              element: <ResultsHomeWork />,
            },
            {
              path: "video/:id",
              element: <UserVideos />,
            },
          ],
        },
        {
          path: "userCourses",
          element: <UserCourses />,
        },
      ],
    },
    {
      path: "teacherDashboard",
      element: <TeacherLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
