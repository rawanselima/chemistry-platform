import { addLevel } from "@/services/Levels";
import type { levels } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useAddLevel(
  setIsOpen: (isOpen: boolean) => void
) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newLevel: levels) => addLevel(newLevel),
    onSuccess: () => {
      toast.success("تمت الاضافه بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["levels"] });
    },
    onError: () => {
      toast.error("فشلت الاضافه حاول مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
