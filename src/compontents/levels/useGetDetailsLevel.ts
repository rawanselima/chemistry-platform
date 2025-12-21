import { detailsLevel } from "@/services/Levels";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailsLevel(
  levelId: number | string | null | undefined
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detailsLevel"],
    queryFn: () => detailsLevel(levelId),
  });

  return { data, isLoading, isError };
}
