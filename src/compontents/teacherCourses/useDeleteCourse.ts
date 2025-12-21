import { deleteCourse } from "@/services/Courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useDeleteCourse(setIsOpen: (value: boolean) => void) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (courseId: string | number | undefined) =>
      deleteCourse(courseId),
    onSuccess: () => {
      toast.success("تم حذف الكورس بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("فشل حذف الكورس الرجاء المحاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
