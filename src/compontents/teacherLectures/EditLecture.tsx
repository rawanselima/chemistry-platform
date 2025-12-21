import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import { memo, useEffect, useState } from "react";
import useGetDetailsLecture from "./useGetDetilsLecture";
import Loader from "../common/Loader";
import Error from "../common/Error";
import useGetCourses from "../teacherCourses/useGetCourses";
import type { courses, lectures } from "@/typs";
import useEditLecture from "./useEditLecture";
import Spinner from "../common/Spinner";

function EditLecture({
  isOpen,
  setIsOpen,
  lectureId,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  lectureId: string | number | undefined;
}) {
  const {
    data: detailsLecture,
    isLoading: isLoadingDetailsLecture,
    isError: isErrorDetailsLecture,
  } = useGetDetailsLecture(lectureId);

  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useGetCourses();

  const { mutate, isPending } = useEditLecture(setIsOpen);

  const [courseId, setCourseId] = useState<string>("");

  useEffect(() => {
    if (detailsLecture?.courseId) {
      setCourseId(String(detailsLecture.courseId));
    }
  }, [detailsLecture]);

  if (isLoadingDetailsLecture || isLoadingCourses) return <Loader />;
  if (isErrorDetailsLecture || isErrorCourses) return <Error />;

  const selectedCourse = courses?.data.find(
    (ele: courses) => String(ele.id) === courseId
  );

  function onSubmit(data: lectures) {
    if (!selectedCourse) return;

    const updatedLecture: lectures = {
      ...detailsLecture,
      lectureName: data.lectureName,
      courseId: courseId,
      courseName: selectedCourse.courseName,
      levelName: selectedCourse.level,
      levelId: selectedCourse.levelId,
    };

    mutate({
      lectureId,
      newLecture: updatedLecture,
    });
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="تعديل المحاضره"
      size="md"
      animation="fade"
    >
      <Form onSubmit={onSubmit}>
        {/* اسم المحاضرة */}
        <Form.Label
          htmlFor="lectureName"
          label="عنوان المحاضره"
          style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
        />
        <Form.Input
          type="text"
          name="lectureName"
          defaultValue={detailsLecture.lectureName}
          style="w-full"
          rules={{ required: "يجب كتابة اسم المحاضره" }}
        />

        {/* الكورس */}
        <Form.Label
          htmlFor="courseId"
          label="اسم الكورس"
          style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
        />
        <Form.Select
          name="courseId"
          data={courses?.data.map((ele: courses) => ({
            id: String(ele.id),
            value: ele.courseName,
          }))}
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          style="w-full"
          rules={{ required: "يجب اختيار كورس الخاص بالمحاضره" }}
        />

        {/* الصف الدراسي */}
        <Form.Label
          htmlFor="levelName"
          label="الصف الدراسي"
          style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
        />
        <Form.Input
          type="text"
          name="levelName"
          value={selectedCourse?.level ?? ""}
          style="w-full"
          readonly
        />

        {/* الأزرار */}
        <div className="flex items-center gap-3 mt-5">
          <Button style="solid" size="medium" width="fit" type="submit">
            {isPending ? <Spinner color="lightPurple" /> : "حفظ التعديلات"}
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
  );
}

export default memo(EditLecture);
