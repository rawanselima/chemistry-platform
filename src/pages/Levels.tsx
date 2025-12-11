import Button from "@/compontents/common/Button";
import GeneralTable from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { FiPlus } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import DeleteModal from "@/compontents/common/DeleteModal";
import EditLevel from "@/compontents/levels/EditLevel";
import AddLevel from "@/compontents/levels/AddLevel";

type dataType = {
  id: string;
  level: string;
  studentNumber: number | string;
};
const Levels = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const columns = [
    {
      key: "level",
      label: "اسم الطالب",
    },
    {
      key: "studentNumber",
      label: "المستوي الدراسي ",
      style: "font-bold text-xl text-purple",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      level: "صف اول ثانوي",
      studentNumber: 50,
    },
  ];

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
  return (
    <main>
      <section className="flex flex-wrap justify-between items-center mt-10">
        <TitleDashboard> الصفوف الدراسيه </TitleDashboard>
        <Button
          style="solid"
          size="large"
          width="fit"
          onClick={() => setIsAddOpen(true)}
        >
          <FiPlus />
          اضافه صف
        </Button>
      </section>
      <section className="xl:w-3/4 w-full mx-auto mt-5">
        <GeneralTable data={data} columns={columns} actions={actions} />
      </section>

      {isAddOpen && <AddLevel isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isEditOpen && (
        <EditLevel isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      )}

      {isDeleteOpen && (
        <DeleteModal
          setIsOpen={setIsDeleteOpen}
          isOpen={isDeleteOpen}
          title="حذف الصف الدراسي"
        />
      )}
    </main>
  );
};

export default Levels;
