import DeleteModal from "@/compontents/common/DeleteModal";
import PaginationDiv from "@/compontents/common/Pagination";
import GeneralTable from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import EditStudent from "@/compontents/students/EditStudent";
import SearchFilter from "@/compontents/teacherLectures/SearchFilter";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type dataType = {
  id: string;
  studentName: string;
  studentNumber: string;
  parentNumber: string;
  level: string;
  progress: string;
};
const Students = () => {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const levels = [
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
  ];
  const columns = [
    {
      key: "studentName",
      label: "اسم الطالب",
    },
    {
      key: "level",
      label: "المستوي الدراسي ",
      style: "font-bold",
    },
    {
      key: "studentNumber",
      label: "رقم الطالب",
    },
    {
      key: "parentNumber",
      label: "رقم ولي الامر",
    },
    {
      key: "progress",
      label: "التقدم",
      style: "text-purple",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      studentName: "احمد محمد سعيد",
      studentNumber: "01060661936",
      parentNumber: "01060661936",
      level: "الصف الثالث الثانوي",
      progress: "56%",
    },
  ];

  const actions = [
    {
      label: <FaRegEye />,
      operation: "view",
      function: (row: dataType) => navigate(row.id),
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
  ];

  return (
    <main>
      <section className="my-5 flex justify-between">
        <SearchFilter
          placeholder="ابحث عن اسم الطالب"
          data={levels}
          defaultValue="اخر الصف الدراسي"
        >
          <TitleDashboard style="!mb-0"> قائمه الطلاب </TitleDashboard>
        </SearchFilter>
      </section>
      <GeneralTable columns={columns} data={data} actions={actions} />

      <section className="my-5">
        <PaginationDiv />
      </section>

      {isEditOpen && (
        <EditStudent isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      )}

      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف الطالب"
        />
      )}
    </main>
  );
};

export default Students;
