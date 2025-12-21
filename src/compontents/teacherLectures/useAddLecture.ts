import { addLecture } from "@/services/Lectures";
import type { lectures } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useAddLecture(setIsOpen: (value: boolean) => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newLecture: lectures) => addLecture(newLecture),
    onSuccess: () => {
      toast.success("تمت اضافه المحاضره الجديده بنجاح");
      queryClient.invalidateQueries({ queryKey: ["lectures"] });
      setIsOpen(false);
    },
    onError: () => {
      toast.error("فشل اضافه المحاضره برجاء المحاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
