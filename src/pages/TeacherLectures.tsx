import Button from "@/compontents/common/Button";
import AddLecture from "@/compontents/teacherLectures/AddLecture";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import GeneralTable from "../compontents/common/Table";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditLecture from "../compontents/teacherLectures/EditLecture";
import DeleteModal from "../compontents/common/DeleteModal";

interface dataType {
  id: string;
  course: string;
  lecture: string;
  video: string;
  exam: string;
  homework: string;
  level: string;
}
const TeacherLectures = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

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
      key: "level",
      label: "  الصف الدراسي",
    },
    {
      key: "video",
      label: "عدد الفيديوهات",
    },
    {
      key: "exam",
      label: " عدد الامتحانات",
    },
    {
      key: "homework",
      label: "عدد الواجبات ",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const actions = [
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

  const data: dataType[] = [
    {
      id: "1",
      course: "الباب الاول",
      lecture: "المناعه",
      video: "24 فيديو",
      exam: "30 امتحان",
      homework: "20 واجب",
      level: "الصف الثاني الثانوي",
    },
  ];
  return (
    <main>
      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <Button
          style="solid"
          size="large"
          width="fit"
          onClick={() => setIsAddOpen(true)}
        >
          <FiPlus />
          اضافه محاضره جديده
        </Button>
      </section>

      {isAddOpen && <AddLecture isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isEditOpen && (
        <EditLecture isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      )}
      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف المحاضره"
        />
      )}
    </main>
  );
};

export default TeacherLectures;
