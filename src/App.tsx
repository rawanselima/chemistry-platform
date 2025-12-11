import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import DetailsCourse from "./pages/DetailsCourse";
import UserProfile from "./pages/UserProfile";
import UserCourses from "./pages/UserCourses";
import DetailsUserCourses from "./pages/DetailsUserCourses";
import UserExam from "./pages/UserExam";
import ResultExam from "./pages/ResultExam";
import UserHomework from "./pages/userHomework";
import ResultsHomeWork from "./pages/ResultsHomework";
import UserVideos from "./pages/UserVideos";
import Community from "./pages/Community";
import UserLayout from "./compontents/layout/userLayout";
import Receipt from "./pages/Receipt";
import LayoutCourses from "./compontents/layout/LayoutCourses";
import AllExamResults from "./pages/AllExamResults";
import AllHomeworkResults from "./pages/AllHomeworkResults";
import TeacherLayout from "./compontents/layout/TeacherLayout";
import TeacherCourses from "./pages/TeacherCourses";
import DetailsTeacherCourses from "./pages/DetailsTeacherCourses";
import Layout from "./compontents/layout/Layout";
import TeacherLectures from "./pages/TeacherLectures";
import TeacherVideos from "./pages/TeacherVideos";
import TeacherExams from "./pages/TeacherExams";
import TeacherHomeworks from "./pages/TeacherHomeworks";
import TeacherFiles from "./pages/TeacherFiles";
import TeacherCommunity from "./pages/TeacherCommunity";
import Students from "./pages/Students";
import DetailsStudent from "./pages/DetailsStudent";
import DataStudent from "./pages/DataStudent";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherReceipt from "./pages/TeacherReceipt";
import Levels from "./pages/Levels";
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
      children: [
        {
          index: true,
          element: <TeacherDashboard />,
        },
        {
          path: "community",
          element: <TeacherCommunity />,
        },
        {
          path: "receipts",
          element: <TeacherReceipt />,
        },
        {
          path: "levels",
          element: <Levels />,
        },
        {
          path: "students",
          element: <Students />,
        },
        {
          path: "students/:id",
          element: <DetailsStudent />,
        },
        {
          path: "students/:id/course/:id",
          element: <DataStudent />,
        },
        {
          path: "courses",
          element: <TeacherCourses />,
        },
        {
          path: "courses/:id",
          element: <DetailsTeacherCourses />,
          children: [
            {
              index: true,
              element: <TeacherLectures />,
            },
            {
              path: "videos",
              element: <TeacherVideos />,
            },
            {
              path: "exams",
              element: <TeacherExams />,
            },
            {
              path: "homeworks",
              element: <TeacherHomeworks />,
            },
            {
              path: "files",
              element: <TeacherFiles />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
