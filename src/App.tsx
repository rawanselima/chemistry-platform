import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Courses from "./pages/Courses";
import DetailsCourse from "./pages/DetailsCourse";
import UserProfile from "./pages/UserProfile";
import UserCourses from "./pages/UserCourses";
import MyCourses from "./compontents/userCourses/MyCourses";
import FreeCourses from "./compontents/userCourses/FreeCourses";
import AllUserCourses from "./compontents/userCourses/AllCourses";
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
          path: "course/:id",
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
          path: "userCourses",
          element: <UserCourses />,
          children: [
            {
              index: true,
              element: <MyCourses />,
            },
            {
              path: "freeCourses",
              element: <FreeCourses />,
            },
            {
              path: "allCourses",
              element: <AllUserCourses />,
            },
          ],
        },
        {
          path: "course/:id/exams/:id",
          element: <UserExam />,
        },
        {
          path: "course/:id/exams/:id/resultExam/:id",
          element: <ResultExam />,
        },
        {
          path: "course/:id/homework/:id",
          element: <UserHomework />,
        },
        {
          path: "course/:id/homework/:id/resultHomework/:id",
          element: <ResultsHomeWork />,
        },
        {
          path: "course/:id/video/:id",
          element: <UserVideos />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
