import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
function AddFile({
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
        title="اضافه الملف"
        size="md"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="file"
            label="عنوان الملف"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input type="text" name="file" style="w-full" focus={true} />

          <Form.Label
            htmlFor="course"
            label=" اسم الكورس "
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            defaultValue="الباب الاول"
            readonly={true}
            name="course"
            style="w-full"
          />

          <Form.Label
            htmlFor="newFile"
            label="اضافه الملف"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input name="newFile" type="file" style="w-full" />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit">
              اضافه
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

export default AddFile;
