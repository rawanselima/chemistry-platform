import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useGetDetailsCourse from "../teacherCourses/useGetDetailsCourse";
import useAddVideo from "./useAddVideo";
import type { videos } from "@/typs";
import { memo } from "react";
import Spinner from "../common/Spinner";
import useDate from "@/hooks/useDate";
import useUploadVideo from "@/hooks/useUploadVideo";
import useVideoDuration from "@/hooks/useVideoDuration";

interface props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  lectures: { id: string; value: string }[];
  courseId: string | number;
}
function AddVideo({ isOpen, setIsOpen, lectures, courseId }: props) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";

  const { data: detailsCourse, isLoading: isDetailsLoading } = useGetDetailsCourse(courseId);
  const [uploadVideo, { isUploading, error, progress }] = useUploadVideo();
  const { mutate, isPending } = useAddVideo(setIsOpen, error);
  const [getDuration, { isLoading: isDurationLoading }] = useVideoDuration();

  async function onSubmit(data: any) {
    if (!detailsCourse) return;

    try {
      const file = data.videoLink[0] as File;
      
      const [durationResult, videoUrl] = await Promise.all([
        getDuration(file),
        uploadVideo(file)
      ]);

      const lectureName =
        lectures.find((ele) => ele.id == data.lectureId)?.value || "";

      const newVideo: videos = {
        ...data,
        courseId,
        courseName: detailsCourse.courseName,
        lectureName,
        levelName: detailsCourse.level,
        time: durationResult.formatted,
        createdAt: useDate(Date.now()),
        videoLink: videoUrl,
      };

      mutate(newVideo);
    } catch (err) {
      console.error("Error adding video:", err);
    }
  }

  if (isDetailsLoading) return <Spinner color="lightPurple" />;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه فيديو"
        size="lg"
        animation="fade"
      >
        <Form onSubmit={onSubmit}>
          <Form.Label
            htmlFor="courseName"
            label="عنوان الكورس "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="courseName"
            style="w-full"
            readonly={true}
            value={detailsCourse?.courseName || ""}
          />
          <Form.Label
            htmlFor="videoName"
            label="عنوان الفيديو"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="videoName"
            style="w-full"
            focus={true}
            rules={{ required: "يجب ادخال عنوان للفيديو" }}
          />
          <Form.Label
            htmlFor="lectureId"
            label="اختر المحاضره"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Select name="lectureId" style="w-full" data={lectures} />

          <Form.Label
            htmlFor="levelName"
            label="الصف الدراسي"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="levelName"
            style="w-full"
            readonly={true}
            value={detailsCourse?.level || ""}
          />

          <Form.Label
            htmlFor="videoLink"
            label="اختر فيديو"
            style={styleLabel}
          />
          <Form.Input
            type="file"
            name="videoLink"
            style="w-full"
            rules={{ required: "يجب اختيار فيديو" }}
          />

          {/* Upload Progress Indicator */}
          {isUploading && progress > 0 && (
            <div className="mt-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-dark-purple font-tajawal">
                  جاري رفع الفيديو...
                </span>
                <span className="text-sm text-purple font-bold">{progress}%</span>
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
              {isPending || isUploading || isDurationLoading ? (
                <Spinner color="lightPurple" />
              ) : (
                "اضافه"
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

export default memo(AddVideo);

