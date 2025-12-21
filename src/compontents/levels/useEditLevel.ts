import { editLevel } from "@/services/Levels";
import type { levels } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useEditLevel(setIsOpen: (isOpen: boolean) => void) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({
      newLevel,
      levelId,
    }: {
      levelId: string | number ;
      newLevel: levels;
    }) => editLevel({ levelId, newLevel }),
    onSuccess: () => {
      toast.success("تمت التعديل بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["levels"] });
    },
    onError: () => {
      toast.error("فشلت التعديل حاول مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
