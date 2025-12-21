import { FaRegEye } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import GeneralTable from "../common/Table";
import { memo, useMemo, useState } from "react";
import EditCourse from "./EditCourse";
import DeleteModal from "../common/DeleteModal";
import { useNavigate } from "react-router-dom";
import type { courses, levels } from "@/typs";
import { columns } from "./colums";
import { useDeleteCourse } from "./useDeleteCourse";

interface props {
  levels: levels[];
  courses: courses[];
}
const TableCourses = ({ levels, courses }: props) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const { mutate, isPending } = useDeleteCourse(setIsDeleteOpen);

  const [id, setId] = useState<string | number>();
  const navigate = useNavigate();

  const actions = useMemo(
    () => [
      {
        label: <FaRegEye />,
        operation: "view",
        function: (row: courses) => navigate(String(row.id)),
      },
      {
        label: <BiSolidEditAlt />,
        operation: "edit",
        function: (row: courses) => {
          setId(row.id);
          setIsEditOpen(true);
        },
      },
      {
        label: <RiDeleteBin5Line />,
        operation: "delete",
        function: (row: courses) => {
          setId(row.id);
          setIsDeleteOpen(true);
        },
      },
    ],
    [navigate]
  );

  return (
    <section className="my-5">
      <GeneralTable<courses>
        columns={columns}
        data={courses ?? []}
        actions={actions}
      />
      {isEditOpen && id != null && (
        <EditCourse
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          courseId={id}
          levels={levels}
        />
      )}
      {isDeleteOpen && id != null && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف الكورس"
          isPending={isPending}
          deleteFn={() => mutate(id)}
        />
      )}
    </section>
  );
};

export default memo(TableCourses);
