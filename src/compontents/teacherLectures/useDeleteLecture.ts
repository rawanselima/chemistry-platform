import { deleteLecture } from "@/services/Lectures";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useDeleteLecture(
  setIsOpen: (value: boolean) => void,
  courseId: string | undefined
) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (lectureId: string | number | undefined) =>
      deleteLecture(lectureId),
    onSuccess: () => {
      toast.success("تم حذف المحاضره بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["lectures", courseId] });
    },
    onError: () => {
      setIsOpen(false);
      toast.error("فشلت حذف المحاضره برجاء المحاوله مره اخري ");
    },
  });

  return { mutate, isPending };
}
