import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
function EditStudent({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const levels = [
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
  ];

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل بيانات الطالب"
        size="md"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="studentName"
            label="اسم الطالب"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="studentName"
            defaultValue={"احمد محمد سليمان "}
            style="w-full"
          />

          <Form.Label
            htmlFor="studentNumber"
            label=" رقم تليفون الطالب "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="studentNumber"
            defaultValue="123456789"
            style="w-full"
          />

          <Form.Label
            htmlFor="parentStudent"
            label="رقم ولي الامر"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            name="parentStudent"
            type="text"
            style="w-full"
            defaultValue="1478963"
          />

          <Form.Label
            htmlFor="level"
            label="الصف الدراسي "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Select
            data={levels}
            name="level"
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

export default EditStudent;
