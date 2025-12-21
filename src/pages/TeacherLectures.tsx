import Button from "@/compontents/common/Button";
import AddLecture from "@/compontents/teacherLectures/AddLecture";
import { memo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import GeneralTable from "../compontents/common/Table";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditLecture from "../compontents/teacherLectures/EditLecture";
import DeleteModal from "../compontents/common/DeleteModal";
import useGetLectures from "@/compontents/teacherLectures/useGetLectures";
import type { lectures } from "@/typs";
import { columns } from "@/compontents/teacherLectures/colums";
import Loader from "@/compontents/common/Loader";
import Error from "@/compontents/common/Error";
import useDeleteLecture from "@/compontents/teacherLectures/useDeleteLecture";
import { useParams } from "react-router-dom";
import useGetDetailsCourse from "@/compontents/teacherCourses/useGetDetailsCourse";
import NoItems from "@/compontents/common/NoItems";
const TeacherLectures = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | string | undefined>();
  const { id: courseId } = useParams();

  const {
    data: detailsCourse,
    isLoading: isLoadingDetailsCourse,
    isError: isErrorDetailsCourse,
  } = useGetDetailsCourse(courseId);

  const { data: lectures, isLoading, isError } = useGetLectures(courseId);
  const { mutate: deleteLecture, isPending } = useDeleteLecture(
    setIsDeleteOpen,
    courseId
  );

  const actions = [
    {
      label: <BiSolidEditAlt />,
      operation: "edit",
      function: (row: lectures) => {
        setIsEditOpen(true);
        setId(row.id);
      },
    },
    {
      label: <RiDeleteBin5Line />,
      operation: "delete",
      function: (row: lectures) => {
        setIsDeleteOpen(true);
        setId(row.id);
      },
    },
  ];

  if (isLoading || isLoadingDetailsCourse) return <Loader />;
  if (isError || isErrorDetailsCourse) return <Error />;

  return (
    <main>
      {lectures?.length > 0 ? (
        <GeneralTable<lectures>
          columns={columns}
          data={lectures}
          actions={actions}
        />
      ) : (
        <NoItems title="لا يوجد محاضرات" />
      )}

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

      {isAddOpen && (
        <AddLecture
          isOpen={isAddOpen}
          setIsOpen={setIsAddOpen}
          detailsCourse={detailsCourse}
        />
      )}

      {isEditOpen && (
        <EditLecture
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          lectureId={id}
        />
      )}
      {isDeleteOpen && (
        <DeleteModal
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          title="حذف المحاضره"
          deleteFn={() => deleteLecture(id)}
          isPending={isPending}
        />
      )}
    </main>
  );
};

export default memo(TeacherLectures);
