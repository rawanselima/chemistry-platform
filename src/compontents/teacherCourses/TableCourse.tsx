import { FaRegEye } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import GeneralTable from "../common/Table";
import { useState } from "react";
import EditCourse from "./EditCourse";
import DeleteModal from "../common/DeleteModal";
import { useNavigate } from "react-router-dom";

interface dataType {
  id: string;
  img: string;
  courseName: string;
  level: string;
  lectures: string;
  students: string;
  description: string;
  price: number;
  discount: number;
}
const TableCourses = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const columns = [
    {
      key: "img",
      label: "الصوره",
    },
    {
      key: "courseName",
      label: "اسم الكورس",
    },
    {
      key: "level",
      label: "المرحله",
      style: "text-purple",
    },
    {
      key: "price",
      label: "السعر",
      style: "text-simon",
    },
    {
      key: "discount",
      label: "تخفيض ",
      style: "font-bold",
    },
    {
      key: "description",
      label: "وصف الكورس",
      style:
        "max-w-[200px] overflow-hidden text-sm text-ellipsis whitespace-nowrap",
    },
    {
      key: "lectures",
      label: "المحاضرات",
    },
    {
      key: "students",
      label: "الطلاب",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      img: "/assets/course-1.png",
      courseName: "الدعامه",
      price: 200,
      discount: 50,
      description:
        "دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني",
      level: "الصف الاول الثانوي",
      lectures: "25 محاضره ",
      students: " 20 طالب",
    },
    {
      id: "2",
      img: "/assets/course-1.png",
      courseName: "الدعامه",
      price: 200,
      discount: 50,

      description:
        "دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثا",
      level: "الصف الاول الثانوي",
      lectures: "25 محاضره ",
      students: " 20 طالب",
    },
    {
      id: "3",
      img: "/assets/course-1.png",
      courseName: "الدعامه",
      price: 200,
      discount: 50,

      description:
        "دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني",
      level: "الصف الاول الثانوي",
      lectures: "25 محاضره ",
      students: " 20 طالب",
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
    <section className="my-5">
      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />
      {isEditOpen && (
        <EditCourse isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      )}
      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف الكورس"
        />
      )}
    </section>
  );
};

export default TableCourses;
