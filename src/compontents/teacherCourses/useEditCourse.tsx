import { editCourse } from "@/services/Courses";
import type { courses } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useEditCourse(
  setIsOpen: (value: boolean) => void,
  error?: string | null
) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (error) {
      toast.error("فشل تحميل الصوره برجاء المحاوله مره اخري");
      setIsOpen(false);
    }
  }, [error, setIsOpen]);

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      courseId,
      newCourse,
    }: {
      courseId: string | number | undefined;
      newCourse: courses;
    }) => editCourse({ courseId, newCourse }),
    onSuccess: () => {
      toast.success("تم تعديل الكورس بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("فشل التعديل الرجاء محاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
