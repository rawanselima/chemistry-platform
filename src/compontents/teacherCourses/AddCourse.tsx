import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import type { levels, courses } from "@/typs";
import useAddCourse from "./useAddCourse";
import Spinner from "../common/Spinner";
import useUploadImage from "@/hooks/useUploadImg";
function AddCourse({
  isOpen,
  setIsOpen,
  levels,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  levels: levels[];
}) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";

  const [uploadImage, { isUploading, error }] = useUploadImage();
  const { mutate, isPending } = useAddCourse(setIsOpen, error);

  async function onSubmit(data: any) {
    try {
      const levelName = levels.find(
        (level) => String(level.id) === String(data.levelId)
      );
      
      const file: File = data.img[0];
      const urlImg = await uploadImage(file);

      const newCourse: courses = {
        ...data,
        img: urlImg || "",
        level: levelName?.level || "غير معروف",
        lecturesNumber: "0 محاضره",
        studentsNumber: "0 طالب",
      };

      mutate(newCourse);
    } catch (err) {
      console.error("Error adding course:", err);
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه الكورس"
        size="lg"
        animation="fade"
      >
        <Form onSubmit={onSubmit}>
          <Form.Label
            htmlFor="courseName"
            label="عنوان الكورس"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="courseName"
            style="w-full"
            focus={true}
            rules={{ required: "يجب ادخال عنوان للكورس" }}
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
                rules={{ required: "يجب ادخال سعر للكورس" }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <Form.Label
                htmlFor="discount"
                label="التخفيض"
                style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
              />
              <Form.Input
                type="text"
                name="discount"
                style="w-full"
                defaultValue="0"
              />
            </div>
          </div>
          <Form.Label
            htmlFor="levelId"
            label=" المرحله الدراسيه  "
            style={styleLabel}
          />
          <Form.Select
            name="levelId"
            style="w-full"
            data={
              levels.map((ele) => ({ id: String(ele.id), value: ele.level })) ??
              []
            }
            defaultValue="اختر المرحله الدراسيه"
            rules={{ required: "يجب اختيار المرحله الدراسيه" }}
          />

          <Form.Label
            htmlFor="description"
            label="وصف الكورس "
            style={styleLabel}
          />

          <Form.Textarea
            name="description"
            style="w-full"
            placeholder="  اكتب وصف للكورس و المحتوي الخاص به"
            rules={{ required: "يجب ادخال وصف للكورس" }}
          />

          <Form.Input
            type="file"
            name="img"
            style="w-full"
            rules={{ required: "يجب اختيار صوره" }}
          />
          <Form.Label htmlFor="img" label="اختر الصوره" style={styleLabel} />

          <div className="flex items-center gap-3 mt-5">
            <Button
              style="solid"
              size="medium"
              width="fit"
              type="submit"
              disabled={isPending}
            >
              {isPending || isUploading ? (
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

export default AddCourse;
