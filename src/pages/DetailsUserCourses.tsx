import Tabs from "@/compontents/common/Tabs";
import ExamsBox from "@/compontents/detailsUserCourse/ExamsBox";
import FilesBox from "@/compontents/detailsUserCourse/FilesBox";
import Header from "@/compontents/detailsUserCourse/Header";
import HomeworkBox from "@/compontents/detailsUserCourse/HomeworkBox";
import VideoBox from "@/compontents/detailsUserCourse/VideoBox";
import Form from "@/pattern/form/Form";
import type { PagesProps } from "@/typs";
const DetailsUserCourses = () => {
  const pages: PagesProps[] = [
    {
      title: "الفيديوهات",
      path: "",
      value: "videos",
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
    {
      title: "الاختبارات",
      path: "exams",
      value: "exams",
    },
  ];

  const lectures = [
    {
      id: "1",
      value: "الاسبوع الاولى",
    },
    { id: "2", value: "الاسبوع الثانيه" },
    { id: "3", value: "الاسبوع الثالثه" },
  ];

  return (
    <main>
      <Header />
      <section className="my-5 flex justify-between items-center flex-wrap">
        <Form>
          <Form.Select
            name="lecture"
            defaultValue="اختر المحاضره "
            data={lectures}
            style="w-62 bg-white py-3 border-1 border-purple "
          />
        </Form>
        <Tabs pages={pages} mode="filter" />
      </section>
      {/*   condition filter according to tabs that appear the correct box   */}
      <ExamsBox />
      <HomeworkBox />
      <FilesBox />
      <VideoBox />
    </main>
  );
};

export default DetailsUserCourses;
