import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
function EditLecture({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const data = [
    {
      id: "1",
      value: "محاضره الاولي",
    },
    {
      id: "1",
      value: "محاضره التانيه",
    },
    {
      id: "1",
      value: "محاضره الثالثه",
    },
  ];

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل المحاضره"
        size="md"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="lecture"
            label="عنوان المحاضره"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="lecture"
            defaultValue={"الباب الاول"}
            style="w-full"
          />

          <Form.Label
            htmlFor="course"
            label=" اسم الكورس "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Select
            data={data}
            name="course"
            defaultValue="1"
            style="w-full"
          />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit">
              حفظ التعديلات
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

export default EditLecture;
