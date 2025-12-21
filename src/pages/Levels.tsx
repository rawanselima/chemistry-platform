import Button from "@/compontents/common/Button";
import GeneralTable from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { FiPlus } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { memo, useMemo, useState } from "react";
import DeleteModal from "@/compontents/common/DeleteModal";
import EditLevel from "@/compontents/levels/EditLevel";
import AddLevel from "@/compontents/levels/AddLevel";
import { useGetLevel } from "@/compontents/levels/useGetLevel";
import type { levels } from "@/typs";
import Loader from "@/compontents/common/Loader";
import useDeleteLevel from "@/compontents/levels/useDeleteLevel";
import Error from "@/compontents/common/Error";
const Levels = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const { data, isLoading, isError } = useGetLevel();
  const { mutate, isPending } = useDeleteLevel(setIsDeleteOpen);

  const [id, setId] = useState<string | number | undefined>();

  // Derived state
  const selectedLevel = data?.find((level) => level.id === id);

  const columns = useMemo(
    () =>
      [
        {
          key: "level",
          label: "المستوي الدراسي",
        },
        {
          key: "studentNumber",
          label: "عدد الطلاب",
          style: "font-bold text-xl text-purple",
        },
      ] satisfies { key: keyof levels; label: string; style?: string }[],
    []
  );

  const actions = useMemo(
    () => [
      {
        label: <BiSolidEditAlt />,
        operation: "edit",
        function: (row: levels) => {
          setId(row.id);
          setIsEditOpen(true);
        },
      },
      {
        label: <RiDeleteBin5Line />,
        operation: "delete",
        function: (row: levels) => {
          setId(row.id);
          setIsDeleteOpen(true);
        },
      },
    ],
    []
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

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
        <GeneralTable<levels>
          data={data ?? []}
          columns={columns}
          actions={actions}
        />
      </section>

      {isAddOpen && <AddLevel isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      {isEditOpen && id != null && selectedLevel && (
        <EditLevel
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          levelId={id}
          levelName={selectedLevel}
        />
      )}

      {isDeleteOpen && id != null && (
        <DeleteModal
          setIsOpen={setIsDeleteOpen}
          isOpen={isDeleteOpen}
          deleteFn={() => mutate(id)}
          isPending={isPending}
          title="حذف الصف الدراسي"
        />
      )}
    </main>
  );
};

export default memo(Levels);
