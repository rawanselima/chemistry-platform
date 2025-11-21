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
import Exam from "./pages/Exam";
import UserLayout from "@/pages/UserLayout";
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
          element: <Exam />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
