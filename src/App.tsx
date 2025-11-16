import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Courses from "./pages/Courses";
import DetailsCourse from "./pages/DetailsCourse";
import UserLayout from "./pages/userLayout";
import UserProfile from "./pages/UserProfile";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
