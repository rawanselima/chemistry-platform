import Tabs from "@/compontents/common/Tabs";
import type { PagesProps } from "@/typs";
import { Outlet } from "react-router-dom";


const UserCourses = () => {
  const pages: PagesProps[] = [
    {
      title: "كورساتي",
      path: "/userProfile/userCourses",
    },
    {
      title: "الكورسات المجانيه",
      path: "freeCourses",
    },
    {
      title: "جميع الكورسات",
      path: "allCourses",
    },
  ];
  return (
    <main>
      <Tabs pages={pages} />
      <Outlet />
    </main>
  );
};

export default UserCourses;
