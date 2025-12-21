import { deleteVideo } from "@/services/videos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useDeleteVideo(setIsOpen: (value: boolean) => void) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (videoId: string | number | undefined) => deleteVideo(videoId),
    onSuccess: () => {
      toast.success("تم حذف الفيديو بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
    onError: () => {
      toast.error("فشل حذف الفيديو برجاء المحاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
