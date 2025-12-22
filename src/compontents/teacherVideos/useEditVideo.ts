import { editVideo } from "@/services/videos";
import type { videos } from "@/typs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useEditVideo({
  setIsOpen,
  error,
}: {
  setIsOpen: (value: boolean) => void;
  error: string | null;
}) {
  useEffect(() => {
    if (error) {
      toast.error(error);
      setIsOpen(false);
    }
  }, [error]);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({
      videoId,
      newVideo,
    }: {
      videoId: string | number | undefined;
      newVideo: videos;
    }) => editVideo({ videoId, newVideo }),
    onSuccess: () => {
      toast.success("تم تعديل بيانات الفيديو بنجاح");
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
    onError: () => {
      toast.error("فشل تعديل الفيديو برجاء المحاوله مره اخري");
      setIsOpen(false);
    },
  });

  return { mutate, isPending };
}
