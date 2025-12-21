import { addCourse } from "@/services/Courses";
import type { courses } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useAddCourse(
  setIsOpen: (value: boolean) => void,
  error: string | null
) {
  useEffect(() => {
    if (error) {
      toast.error("فشلت اضافه الكورس من فضلك حاول مره اخري");
      setIsOpen(false);
    }
  }, [error]);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (newCourse: courses) => addCourse(newCourse),
    onSuccess: () => {
      toast.success("تمت اضافه الكورس الجديد بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("فشلت اضافه الكورس من فضلك حاول مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
