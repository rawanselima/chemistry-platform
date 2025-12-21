import { getVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";

export default function useGetVideos(courseId: string | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", courseId],
    queryFn: () => getVideos(courseId),
  });

  return { data, isLoading, isError };
}
