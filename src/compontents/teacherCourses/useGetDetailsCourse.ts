import { getDetailsCourse } from "@/services/Courses";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailsCourse(courseId: string | number | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailsCourse", courseId],
    queryFn: () => getDetailsCourse(courseId),
    enabled: !!courseId,
  });

  return { data, isLoading, isError };
}
