import { getDetailsVideo } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailsVideo(
  videoId: string | number | undefined
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailsVideo", videoId],
    queryFn: () => getDetailsVideo(videoId),
  });

  return { data, isLoading, isError };
}
