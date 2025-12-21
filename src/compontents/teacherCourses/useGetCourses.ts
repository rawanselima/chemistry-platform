import { getCourses } from "@/services/Courses";
import { useQuery } from "@tanstack/react-query";

interface props {
  currentFilter?: string;
  currentPage?: string;
  itemPerPage?: string;
}
export default function useGetCourses({
  currentFilter,
  currentPage,
  itemPerPage,
}: props = {}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses", currentFilter, currentPage, itemPerPage],
    queryFn: () => getCourses({ currentFilter, currentPage, itemPerPage }),
  });

  return { data, isLoading, isError };
}
