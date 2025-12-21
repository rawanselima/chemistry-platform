import { getLevels } from "@/services/Levels";
import { useQuery } from "@tanstack/react-query";
import type { levels } from "@/typs";
export const useGetLevel = () => {
  const { data, isLoading, isError } = useQuery<levels[] | undefined>({
    queryKey: ["levels"],
    queryFn: getLevels,
  });

  return { data, isLoading, isError };
};
