import { addVideo } from "@/services/videos";
import type { videos } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useAddVideo(
  setIsOpen: (value: boolean) => void,
  error: string | null
) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const { mutate, isPending } = useMutation({
    mutationFn: (newVideo: videos) => addVideo(newVideo),
    onSuccess: () => {
      toast.success("تم اضافه الفيديو بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
    onError: () => {
      toast.error("فشل اضافه الفيديو الرجاء المحاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
