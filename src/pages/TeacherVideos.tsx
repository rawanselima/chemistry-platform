import Button from "@/compontents/common/Button";
import { memo, useEffect, useState } from "react";
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
import { columns } from "@/compontents/teacherVideos/cloumns";
import useGetVideos from "@/compontents/teacherVideos/useGetVideos";
import Loader from "@/compontents/common/Loader";
import Error from "@/compontents/common/Error";
import type { lectures, videos } from "@/typs";
import AddVideo from "@/compontents/teacherVideos/AddVideo";
import useGetLectures from "@/compontents/teacherLectures/useGetLectures";
import { useParams } from "react-router-dom";
import useDeleteVideo from "@/compontents/teacherVideos/useDeleteVideo";
import NoItems from "@/compontents/common/NoItems";
import usePagination from "@/hooks/usePagination";
const TeacherVideos = () => {
  const itemPerPage = 2;
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isWatchVideoOpen, setIsWatchVideoOpen] = useState<boolean>(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState<boolean>(false);
  const [filterLecture, setFilterLecture] =
    useState<{ id: string; value: string }[]>();
  const [totalItems, setTotalItems] = useState<number>();

  const { id: courseId } = useParams<string>();
  const {
    data: lectures,
    isLoading: isLoadingLectures,
    isError: isErrorLectures,
  } = useGetLectures(courseId);
  const { mutate, isPending } = useDeleteVideo(setIsDeleteOpen);
  const [id, setId] = useState<string | number>();
  const {
    currentPage,
    paginationRange,
    nextPage,
    prevPage,
    setCurrentPage: handlePageChange,
    totalPageCount,
  } = usePagination({ totalItems: totalItems || 0, itemsPerPage: itemPerPage });

  const {
    data: videos,
    isLoading,
    isError,
  } = useGetVideos({ courseId, currentPage, itemPerPage });

  useEffect(() => {
    setTotalItems(videos?.totalCount);
  }, [isLoading]);

  useEffect(() => {
    setFilterLecture(
      lectures?.map((ele: lectures) => ({
        id: ele.id,
        value: ele.lectureName,
      }))
    );
  }, [isLoadingLectures, isErrorLectures]);

  if (isLoading || isLoadingLectures) return <Loader />;
  if (isError || isErrorLectures) return <Error />;

  const actions = [
    {
      label: <FaRegEye />,
      operation: "view",
      function: (row: videos) => {
        setIsWatchVideoOpen(true);
        setId(row.id);
      },
    },
    {
      label: <BiSolidEditAlt />,
      operation: "edit",
      function: (row: videos) => {
        setIsEditOpen(true);
        setId(row.id);
      },
    },
    {
      label: <RiDeleteBin5Line />,
      operation: "delete",
      function: (row: videos) => {
        setIsDeleteOpen(true);
        setId(row.id);
      },
    },
    {
      label: <PiStudentFill />,
      operation: "students",
      function: () => setIsStudentsOpen(true),
    },
  ];

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <main>
      {videos?.data?.length > 0 ? (
        <>
          <SearchFilter
            data={filterLecture || []}
            placeholder="ابحث عن اسم الفيديو"
          />
          <GeneralTable<videos>
            columns={columns}
            data={videos?.data}
            actions={actions}
          />
        </>
      ) : (
        <NoItems title="لا يوجد فيديوهات" />
      )}

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
        <PaginationDiv
          currentPage={currentPage}
          paginationRange={paginationRange}
          nextPage={nextPage}
          prevPage={prevPage}
          setCurrentPage={handlePageChange}
          totalPageCount={totalItems || 0}
        />
      </section>

      {isAddOpen && (
        <AddVideo
          isOpen={isAddOpen}
          setIsOpen={setIsAddOpen}
          lectures={filterLecture || []}
          courseId={courseId || ""}
        />
      )}

      {isEditOpen && (
        <EditVideo
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          videoId={id}
          lectures={filterLecture || []}
        />
      )}

      {isWatchVideoOpen && (
        <WatchVideo
          isOpen={isWatchVideoOpen}
          setIsOpen={setIsWatchVideoOpen}
          videoId={id}
        />
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
          isPending={isPending}
          deleteFn={() => mutate(id)}
        />
      )}
    </main>
  );
};

export default memo(TeacherVideos);
