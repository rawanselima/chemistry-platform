import Button from "@/compontents/common/Button";
import AddLecture from "@/compontents/teacherLectures/AddLecture";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import GeneralTable from "../compontents/common/Table";
import { FaRegEye } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteModal from "../compontents/common/DeleteModal";
import EditVideo from "@/compontents/teacherVideos/EditVideo";
import WatchVideo from "@/compontents/teacherVideos/WatchVideo";
import StudentsWatching from "@/compontents/teacherVideos/StudentsWatching";
import { PiStudentFill } from "react-icons/pi";
import PaginationDiv from "@/compontents/common/Pagination";
import SearchFilter from "@/compontents/teacherLectures/SearchFilter";

interface dataType {
  id: string;
  course: string;
  lecture: string;
  video: string;
  time: string;
  publishedTime: string;
}
const TeacherVideos = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isWatchVideoOpen, setIsWatchVideoOpen] = useState<boolean>(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState<boolean>(false);

  const columns = [
    {
      key: "course",
      label: "اسم الكورس",
    },
    {
      key: "lecture",
      label: "اسم المحاضره",
      style: "text-purple",
    },
    {
      key: "video",
      label: "اسم الفيديو",
    },
    {
      key: "time",
      label: "مده الفيديو ",
      style: "text-gray",
    },
    {
      key: "publishedTime",
      label: "وقت النشر ",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const actions = [
    {
      label: <FaRegEye />,
      operation: "view",
      function: () => setIsWatchVideoOpen(true),
    },
    {
      label: <BiSolidEditAlt />,
      operation: "edit",
      function: () => setIsEditOpen(true),
    },
    {
      label: <RiDeleteBin5Line />,
      operation: "delete",
      function: () => setIsDeleteOpen(true),
    },
    {
      label: <PiStudentFill />,
      operation: "students",
      function: () => setIsStudentsOpen(true),
    },
  ];

  const data: dataType[] = [
    {
      id: "1",
      course: "الباب الاول",
      lecture: "المناعه",
      video: "الجزي الاول من المناعه",
      time: "3:30:20",
      publishedTime: "20 يوليو 2025",
    },
    {
      id: "1",
      course: "الباب الاول",
      lecture: "المناعه",
      video: "الجزي الاول من المناعه",
      time: "30 : 20",
      publishedTime: "20 يوليو 2025",
    },
  ];

  const dataFilter = [
    {
      id: "1",
      value: "محاضره المناعه",
    },
    {
      id: "2",
      value: "محاضره الدعامه",
    },
  ];

  return (
    <main>
      <SearchFilter data={dataFilter} placeholder="ابحث عن اسم الفيديو" />

      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <Button
          style="solid"
          size="large"
          width="fit"
          onClick={() => setIsAddOpen(true)}
        >
          <FiPlus />
          اضافه فيديو جديده
        </Button>
      </section>

      <section>
        <PaginationDiv />
      </section>

      {isAddOpen && <AddLecture isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isEditOpen && (
        <EditVideo isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      )}

      {isWatchVideoOpen && (
        <WatchVideo isOpen={isWatchVideoOpen} setIsOpen={setIsWatchVideoOpen} />
      )}

      {isStudentsOpen && (
        <StudentsWatching
          isOpen={isStudentsOpen}
          setIsOpen={setIsStudentsOpen}
        />
      )}

      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف فيديو"
        />
      )}
    </main>
  );
};

export default TeacherVideos;
