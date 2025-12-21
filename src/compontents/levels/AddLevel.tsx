import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useAddLevel from "./useAddLevel";
import Spinner from "../common/Spinner";

function AddLevel({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { mutate, isPending } = useAddLevel(setIsOpen);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل الصف الدراسي"
        size="md"
        animation="fade"
      >
        <Form onSubmit={mutate}>
          <Form.Label
            htmlFor="level"
            label="الصف الدراسي"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="level"
            style="w-full"
            focus={true}
            rules={{
              required: "يجب ادخال اسم الصف الدراسي",
            }}
          />

          <div className="flex items-center gap-3 mt-5">
            <Button
              style="solid"
              size="medium"
              width="fit"
              type="submit"
              disabled={isPending}
            >
              {isPending ? <Spinner color="lightPurple" /> : "اضافه"}
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

export default AddLevel;
