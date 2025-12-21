import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useGetDetailsCourse from "./useGetDetailsCourse";
import Loader from "../common/Loader";
import Error from "../common/Error";
import type { courses, levels } from "@/typs";
import useEditCourse from "./useEditCourse";
import useUploadImage from "@/hooks/useUploadImg";
import Spinner from "../common/Spinner";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  courseId: string | number | undefined;
  levels: levels[];
}
function EditCourse({ isOpen, setIsOpen, courseId, levels }: Props) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";
  const { data: course, isLoading, isError } = useGetDetailsCourse(courseId);
  const [uploadImage, { isUploading, error }] = useUploadImage();
  const { mutate, isPending } = useEditCourse(setIsOpen, error);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  async function onSubmit(data: any) {
    try {
      let newImg = course.img;
      
      if (data.img && data.img.length > 0) {
        const file = data.img[0] as File;
        const uploadedUrl = await uploadImage(file);
        if (uploadedUrl) newImg = uploadedUrl;
      }

      const level = levels.find(
        (ele) => String(ele.id) === String(data.levelId)
      );

      const newCourse: courses = {
        ...data,
        img: newImg,
        level: level?.level || course.level,
        studentsNumber: course.studentsNumber || "0 طالب",
        lecturesNumber: course.lecturesNumber || "0 محاضره",
      };

      mutate({ courseId, newCourse });
    } catch (err) {
      console.error("Error editing course:", err);
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل الكورس"
        size="lg"
        animation="fade"
      >
        <Form
          onSubmit={onSubmit}
          options={{
            defaultValues: {
              ...course,
              levelId: String(course.levelId),
            },
          }}
        >
          <Form.Label
            label="عنوان الكورس"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
            htmlFor="courseName"
          />
          <Form.Input
            type="text"
            name="courseName"
            style="w-full"
            rules={{ required: "يجب كتاب اسم الكورس" }}
          />
          <div className="flex gap-2 md:flex-nowrap flex-wrap">
            <div className="md:w-1/2 w-full">
              <Form.Label
                htmlFor="price"
                label="سعر الكورس "
                style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
              />
              <Form.Input
                type="text"
                name="price"
                style="w-full"
                rules={{ required: "يجب كتابه سعر الكورس" }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <Form.Label
                htmlFor="discount"
                label="التخفيض "
                style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
              />
              <Form.Input type="text" name="discount" style="w-full" />
            </div>
          </div>
          <Form.Label
            label=" المرحله الدراسيه  "
            htmlFor="levelId"
            style={styleLabel}
          />
          <Form.Select
            name="levelId"
            style="w-full"
            data={
              levels?.map((ele) => ({
                id: String(ele.id),
                value: ele.level,
              })) ?? []
            }
            rules={{ required: "يجب اختيار المرحله الدراسيه" }}
          />
          <Form.Label
            label="وصف الكورس"
            htmlFor="description"
            style={styleLabel}
          />
          <Form.Textarea
            style="w-full h-30"
            name="description"
            rules={{ required: "يجب كتابه وصف دقيق للكورس" }}
          />
          <Form.Label label="تغيير الصوره" style={styleLabel} htmlFor="img" />
          <Form.Input type="file" name="img" style="w-full" />
          <img
            src={course.img}
            alt="صوره الكورس"
            className="w-3/4 h-50 object-fit mx-auto mt-5 "
          />
          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit" type="submit">
              {isPending || isUploading ? (
                <Spinner color="lightPurple" />
              ) : (
                "   حفظ التعديلات"
              )}
            </Button>
            <Button
              style="outline"
              size="medium"
              width="fit"
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

export default EditCourse;
