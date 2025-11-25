import Tabs from "@/compontents/common/Tabs";
import Courses from "@/compontents/userCourses/Courses";
import type { PagesProps } from "@/typs";

const UserCourses = () => {
  const pages: PagesProps[] = [
    { title: "كورساتي", path: "", value: "myCourses" },
    { title: "الكورسات المجانيه", path: "", value: "freeCourses" },
    { title: "جميع الكورسات", path: "", value: "allCourses" },
  ];
  return (
    <main>
      <Tabs pages={pages} mode="filter" paramName="tab" />
      <Courses />
    </main>
  );
};

export default UserCourses;
