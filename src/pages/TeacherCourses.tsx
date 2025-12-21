import Button from "@/compontents/common/Button";
import Error from "@/compontents/common/Error";
import Loader from "@/compontents/common/Loader";
import PaginationDiv from "@/compontents/common/Pagination";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { useGetLevel } from "@/compontents/levels/useGetLevel";
import AddCourse from "@/compontents/teacherCourses/AddCourse";
import TableCourses from "@/compontents/teacherCourses/TableCourse";
import useGetCourses from "@/compontents/teacherCourses/useGetCourses";
import useFilter from "@/hooks/useFilter";
import usePagination from "@/hooks/usePagination";
import Form from "@/pattern/form/Form";
import { memo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

const TeacherCourses = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const itemsPerPage = 5;

  const { setFilter, currentFilter } = useFilter();

  const {
    data: coursesData,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useGetCourses({
    currentFilter,
    currentPage: page,
    itemPerPage: String(itemsPerPage),
  });

  const totalCount = coursesData?.totalCount ?? 0;
  const courses = coursesData?.data ?? [];

  const {
    currentPage,
    paginationRange,
    nextPage,
    prevPage,
    setCurrentPage,
    totalPageCount,
  } = usePagination({
    totalItems: totalCount,
    itemsPerPage,
    enableSearchParams: true,
  });

  const {
    data: levels,
    isLoading: isLoadingLevels,
    isError: isErrorLevels,
  } = useGetLevel();

  if (isLoadingLevels || isLoadingCourses) return <Loader />;
  if (isErrorLevels || isErrorCourses) return <Error />;

  return (
    <main>
      <section className="mt-10 flex items-center justify-between flex-wrap">
        <TitleDashboard> جميع الكورسات المتاحه </TitleDashboard>
        <div className="flex flex-wrap gap-2">
          <Form>
            <Form.Select
              data={[{ id: "all", value: "الكل" }].concat(
                levels?.map((ele) => ({
                  id: String(ele.id),
                  value: ele.level,
                })) ?? []
              )}
              value={currentFilter}
              name="levels"
              style=" w-65 mt-0"
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form>
          <Button
            style="solid"
            size="medium"
            width="fit"
            onClick={() => setIsAddOpen(true)}
          >
            <FiPlus /> اضافه كورس جديد
          </Button>
        </div>
      </section>

      {isAddOpen && (
        <AddCourse
          isOpen={isAddOpen}
          setIsOpen={setIsAddOpen}
          levels={levels || []}
        />
      )}

      <section className="bg-white">
        <TableCourses levels={levels || []} courses={courses || []} />
      </section>

      <PaginationDiv
        currentPage={currentPage}
        paginationRange={paginationRange}
        nextPage={nextPage}
        prevPage={prevPage}
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
      />
    </main>
  );
};

export default memo(TeacherCourses);
