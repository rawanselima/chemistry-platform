import Tabs from "@/compontents/common/Tabs";
import Info from "@/compontents/detailsStudent/Info";
import type { PagesProps } from "@/typs";
import AllExamResults from "./AllExamResults";
import GeneralTable from "@/compontents/common/Table";
import AllHomeworkResults from "./AllHomeworkResults";
import Form from "@/pattern/form/Form";

type dataType = {
  id: string;
  video: string;
  time: string;
  progress: string;
};

const DataStudent = () => {
  const pages: PagesProps[] = [
    {
      title: "فيديوهات",
      path: "videos",
      value: "videos",
    },
    {
      title: "امتحانات",
      path: "exams",
      value: "exams",
    },
    {
      title: "واجبات",
      path: "homeworks",
      value: "homeworks",
    },
  ];

  const columns = [
    {
      key: "video",
      label: "اسم الفيديو",
    },
    {
      key: "time",
      label: "مده الفيديو",
      style: "font-bold",
    },
    {
      key: "progress",
      label: "التقدم ",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      video: "فيديو المناعه",
      time: "3:30:00",
      progress: "50%",
    },
  ];

  return (
    <main>
      <Info />
      <Tabs pages={pages} mode="filter" />
      
      {/*  condition about it according to filter  */}

      {/* <AllExamResults /> */}
      <AllHomeworkResults />
      {/* <GeneralTable columns={columns} data={data} /> */}
    </main>
  );
};

export default DataStudent;
