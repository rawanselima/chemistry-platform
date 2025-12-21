import { getLectures } from "@/services/Lectures";
import { useQuery } from "@tanstack/react-query";

export default function useGetLectures(courseId: string | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lectures", courseId],
    queryFn: () => getLectures(courseId),
  });

  return { data, isLoading, isError };
}
