import { deleteLevel } from "@/services/Levels";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function useDeleteLevel(
  setIsDeleteOpen: Dispatch<SetStateAction<boolean>>
) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string | number) => deleteLevel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["levels"] });
      setIsDeleteOpen(false);
      toast.success("تم الحذف بنجاح");
    },
    onError: () => {
      setIsDeleteOpen(false);
      toast.error("حدث خطأ أثناء الحذف");
    },
  });

  return { mutate, isPending };
}
