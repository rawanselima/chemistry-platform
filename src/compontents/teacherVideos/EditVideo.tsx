import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useGetDetailsVideo from "./useGetDetailsVideo";
import Loader from "../common/Loader";
import Error from "../common/Error";
import type { videos } from "@/typs";
import useEditVideo from "./useEditVideo";
import Spinner from "../common/Spinner";
import { memo } from "react";
import useUploadVideo from "@/hooks/useUploadVideo";
import useVideoDuration from "@/hooks/useVideoDuration";

interface props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  videoId: string | number | undefined;
  lectures: { id: string; value: string }[];
}
function EditVideo({ isOpen, setIsOpen, videoId, lectures }: props) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";

  const { data: videoData, isLoading, isError } = useGetDetailsVideo(videoId);
  const [uploadVideo, { isUploading, error, progress }] = useUploadVideo();
  const [getDuration, { isLoading: isDurationLoading }] = useVideoDuration();
  const { mutate, isPending } = useEditVideo({ setIsOpen, error });
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  async function onSubmit(data: any) {
    try {
      const lectureName = lectures?.find(
        (ele) => String(ele.id) === String(data.lectureId)
      )?.value;

      let updatedVideo: videos = {
        ...videoData,
        videoName: data.videoName,
        lectureId: data.lectureId,
        lectureName: lectureName || videoData.lectureName,
      };

      if (data.newUrl && data.newUrl.length > 0) {
        const file = data.newUrl[0] as File;

        const [videoUrl, durationResult] = await Promise.all([
          uploadVideo(file),
          getDuration(file),
        ]);

        updatedVideo = {
          ...updatedVideo,
          time: durationResult.formatted,
          videoLink: videoUrl,
        };
      }

      mutate({ videoId: videoData.id, newVideo: updatedVideo });
    } catch (err) {
      console.error("Error editing video:", err);
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل المحاضره"
        size="lg"
        animation="fade"
      >
        <Form
          onSubmit={onSubmit}
          options={{
            defaultValues: videoData,
          }}
        >
          <Form.Label
            label="عنوان الفيديو"
            style={styleLabel}
            htmlFor="videoName"
          />

          <Form.Input
            type="text"
            name="videoName"
            style="w-full"
            rules={{ required: "يجب كتاب عنوان للفيديو" }}
          />

          <Form.Label
            label="عنوان المحاضره"
            style={styleLabel}
            htmlFor="lectureId"
          />

          <Form.Select
            name="lectureId"
            style="w-full"
            data={lectures}
            rules={{ required: "يجب اختيار محاضره" }}
          />

          <Form.Label label="الفيديو" style={styleLabel} htmlFor="videoLink" />

          <video controls className="w-full rounded-lg my-5">
            <source src={videoData.videoLink} type="video/mp4" />
          </video>

          <Form.Label
            label=" تغيير الفيديو"
            style={styleLabel}
            htmlFor="newUrl"
          />
          <Form.Input type="file" name="newUrl" style="w-full" />

          {isUploading && progress > 0 && (
            <div className="mt-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-dark-purple font-tajawal">
                  جاري رفع الفيديو...
                </span>
                <span className="text-sm text-purple font-bold">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit" type="submit">
              {isPending || isDurationLoading || isUploading ? (
                <Spinner color="lightPurple" />
              ) : (
                " حفظ التعديلات"
              )}
            </Button>
            <Button
              style="outline"
              size="medium"
              width="fit"
              type="reset"
              onClick={() => setIsOpen(false)}
            >
              اغلاق
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default memo(EditVideo);
