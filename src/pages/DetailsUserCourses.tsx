import Tabs from "@/compontents/common/Tabs";
import Header from "@/compontents/detailsUserCourse/Header";
import type { PagesProps } from "@/typs";
import { Outlet } from "react-router-dom";
const DetailsUserCourses = () => {
  const pages: PagesProps[] = [
    {
      title: "الفيديوهات",
      path: "",
    },
    {
      title: "الواجبات",
      path: "homework",
    },
    {
      title: "الملفات",
      path: "files",
    },
    {
      title: "الاختبارات",
      path: "exams",
    },
  ];
  return (
    <main>
      <Header />
      <Tabs pages={pages} />
      <Outlet />
    </main>
  );
};

export default DetailsUserCourses;
