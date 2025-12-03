import Button from "@/compontents/common/Button";
import Tabs from "@/compontents/common/Tabs";
import { FaArrowLeft } from "react-icons/fa6";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { Outlet, useNavigate } from "react-router-dom";
const DetailsTeacherCourses = () => {
  const navigate = useNavigate();
  const pages = [
    {
      title: "المحاضرات",
      path: "",
      value: "lectures",
    },
    {
      title: "الفيديوهات",
      path: "videos",
      value: "videos",
    },
    {
      title: "الامتحانات",
      path: "exams",
      value: "exams",
    },
    {
      title: "الواجبات",
      path: "homeworks",
      value: "homeworks",
    },
    {
      title: "الملفات",
      path: "files",
      value: "files",
    },
  ];
  return (
    <main>
      <section className="mt-10 flex justify-between items-center flex-wrap">
        <div>
          <TitleDashboard> محتوي كورس الباب الرابع </TitleDashboard>
          <p className="text-sm text-gray p-0 -mt-7 m-3 md:w-3/4 w-full">
            دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات
            وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد
            العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني
          </p>
        </div>
        <Button
          style="solid"
          size="medium"
          width="fit"
          onClick={() => navigate(-1)}
        >
          العوده <FaArrowLeft />
        </Button>
      </section>

      <Tabs pages={pages} mode="routing" />

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default DetailsTeacherCourses;
