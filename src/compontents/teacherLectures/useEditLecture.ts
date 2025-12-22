import { EditLecture } from "@/services/Lectures";
import type { lectures } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface props {
  lectureId: string | number | undefined;
  newLecture: lectures;
}
export default function useEditLecture(setIsOpen: (value: boolean) => void) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ lectureId, newLecture }: props) =>
      EditLecture({ lectureId, newLecture }),
    onSuccess: () => {
      toast.success("تم تعديل المحاضره بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["lectures"] });
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      toast.error("فشل تعديل المحاضره برجاء المحاوهل مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
