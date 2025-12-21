import { detailsLecture } from "@/services/Lectures";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailsLecture(
  lectureId: string | number | undefined
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailsLecture", lectureId],
    queryFn: () => detailsLecture(lectureId),
  });

  return { data, isLoading, isError };
}
