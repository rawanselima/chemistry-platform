import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
function AddLecture({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه المحاضره"
        size="md"
        animation="fade"
      >
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
          defaultValue="المناعه"
        />

        <Form.Label
          htmlFor="level"
          label="الصف الدراسي "
          style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
        />

        <Form.Input
          type="text"
          name="level"
          style="w-full cursor-not-allowed"
          readonly={true}
          defaultValue="الصف الاول الثانوي"
        />

        <Form>
          <Form.Label
            htmlFor="lecture"
            label="عنوان المحاضره"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input type="text" name="lecture" style="w-full" focus={true} />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit">
              اضافه المحاضره
            </Button>
            <Button style="outline" size="medium" width="fit">
              اغلاق
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddLecture;
