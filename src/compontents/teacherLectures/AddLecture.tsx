import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useAddLecture from "./useAddLecture";
import type { courses, lectures } from "@/typs";
import Spinner from "../common/Spinner";

interface props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  detailsCourse: courses;
}
function AddLecture({ isOpen, setIsOpen, detailsCourse }: props) {
  const { mutate, isPending } = useAddLecture(setIsOpen);

  function onSubmit(data: lectures) {
    const newLecture: lectures = {
      ...data,
      courseId: detailsCourse.id,
      levelId: detailsCourse.levelId,
      examsNumber: 0,
      homeworksNumber: 0,
      videosNumber: 0,
    };

    mutate(newLecture);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه المحاضره"
        size="md"
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
            style="w-full cursor-not-allowed"
            readonly={true}
            defaultValue={detailsCourse.courseName}
            rules={{ required: "لا يمكن تغيير اسم الكورس" }}
          />

          <Form.Label
            htmlFor="levelName"
            label="الصف الدراسي "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="levelName"
            style="w-full cursor-not-allowed"
            readonly={true}
            defaultValue={detailsCourse.level}
            rules={{ required: "لا يمكن تغيير الصف الدراسي" }}
          />

          <Form.Label
            htmlFor="lectureName"
            label="عنوان المحاضره"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="lectureName"
            style="w-full"
            focus={true}
            rules={{ required: "يجب كتابه اسم المحاضره" }}
          />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit">
              {isPending ? <Spinner color="lightPurple" /> : " اضافه المحاضره"}
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

export default AddLecture;
