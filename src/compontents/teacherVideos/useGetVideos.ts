import { getVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";

interface props {
  courseId: string | undefined;
  itemPerPage: number;
  currentPage: number;
}

export default function useGetVideos({
  courseId,
  currentPage,
  itemPerPage,
}: props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", courseId, currentPage, itemPerPage],
    queryFn: () => getVideos({ courseId, currentPage, itemPerPage }),
  });

  return { data, isLoading, isError };
}
