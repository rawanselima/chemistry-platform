import Button from "@/compontents/common/Button";
import Tabs from "@/compontents/common/Tabs";
import { FaArrowLeft } from "react-icons/fa6";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import useGetDetailsCourse from "@/compontents/teacherCourses/useGetDetailsCourse";
import Loader from "@/compontents/common/Loader";
import Error from "@/compontents/common/Error";
const DetailsTeacherCourses = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailsCourse(id);

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

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      <section className="mt-10 flex justify-between items-center flex-wrap">
        <div>
          <TitleDashboard> {data.courseName} </TitleDashboard>
          <p className="text-sm text-gray p-0 -mt-7 m-3 md:w-3/4 w-full">
            {data.description}
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
