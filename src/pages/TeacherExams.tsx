import Button from "@/compontents/common/Button";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import GeneralTable from "../compontents/common/Table";
import { FaRegEye } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteModal from "../compontents/common/DeleteModal";
import { PiStudentFill } from "react-icons/pi";
import EditExam from "@/compontents/teacherExams/EditExam";
import ShowExam from "@/compontents/teacherExams/ShowExam";
import Students from "@/compontents/teacherExams/Students";
import AddExam from "@/compontents/teacherExams/AddExam";
import SearchFilter from "@/compontents/teacherLectures/SearchFilter";

interface dataType {
  id: string;
  course: string;
  lecture: string;
  questions: string;
  exam: string;
  time: string;
  publishedTime: string;
}
const TeacherExams = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isShowOpen, setIsShowOpen] = useState<boolean>(false);
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
      key: "exam",
      label: " اسم الامتحان",
    },
    {
      key: "questions",
      label: "عدد الاسئله",
      style: "text-purple",
    },
    {
      key: "time",
      label: " الوقت",
      style: "text-gray",
    },
    {
      key: "publishedTime",
      label: "تاريخ النشر",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const actions = [
    {
      label: <FaRegEye />,
      operation: "view",
      function: () => setIsShowOpen(true),
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
      time: "30:00",
      exam: "امتحان شامل المناعه",
      questions: "20 سؤال",
      publishedTime: "20 نوفمبر 2025",
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
      <SearchFilter data={dataFilter} placeholder="ابحث عن اسم الامتحان" />

      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <Button
          style="solid"
          size="large"
          width="fit"
          onClick={() => setIsAddOpen(true)}
        >
          <FiPlus />
          اضافه امتحان جديد
        </Button>
      </section>

      {isAddOpen && <AddExam isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isEditOpen && <EditExam isOpen={isEditOpen} setIsOpen={setIsEditOpen} />}

      {isShowOpen && <ShowExam isOpen={isShowOpen} setIsOpen={setIsShowOpen} />}

      {isStudentsOpen && (
        <Students isOpen={isStudentsOpen} setIsOpen={setIsStudentsOpen} />
      )}

      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف الامتحان"
        />
      )}
    </main>
  );
};

export default TeacherExams;
