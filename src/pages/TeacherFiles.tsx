import Button from "@/compontents/common/Button";
import DeleteModal from "@/compontents/common/DeleteModal";
import GeneralTable from "@/compontents/common/Table";
import AddFile from "@/compontents/teacherFiles/AddFile";
import EditFile from "@/compontents/teacherFiles/EditFile";
import SearchFilter from "@/compontents/teacherLectures/SearchFilter";
import { useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDownload } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

interface dataType {
  id: string;
  course: string;
  lecture: string;
  file: string;
  publishedTime: string;
}
const TeacherFiles = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  const dataFilter = [
    {
      id: "1",
      value: "محاضره الاول",
    },
    {
      id: "2",
      value: "محاضره الثانيه",
    },
  ];

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
      key: "file",
      label: " اسم الملف",
    },
    {
      key: "publishedTime",
      label: "تاريخ النشر",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      course: "الباب الاول",
      lecture: "محاضره المناعه",
      file: "ملف شامل المناعه",
      publishedTime: "20 نوفمبر 2025",
    },
  ];

  const actions = [
    {
      label: <MdOutlineDownload />,
      operation: "view",
      function: () => console.log("download"),
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
      <SearchFilter data={dataFilter} placeholder="ابحث عن اسم الملف" />

      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <Button
          style="solid"
          size="large"
          width="fit"
          onClick={() => setIsAddOpen(true)}
        >
          <FiPlus />
          اضافه ملف جديد
        </Button>
      </section>

      {isEditOpen && <EditFile isOpen={isEditOpen} setIsOpen={setIsEditOpen} />}
      {isAddOpen && <AddFile isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف الملف"
        />
      )}
    </main>
  );
};

export default TeacherFiles;
