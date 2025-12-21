import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import useEditLevel from "./useEditLevel";
import Spinner from "../common/Spinner";
import type { levels } from "@/typs";
function EditLevel({
  isOpen,
  setIsOpen,
  levelId,
  levelName,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  levelId: number | string;
  levelName: levels;
}) {
  const { mutate, isPending } = useEditLevel(setIsOpen);

  function onSubmit(level: { level: string }) {
    const newLevel = { ...levelName, level: level.level };
    console.log(levelId, newLevel);

    mutate({ levelId, newLevel });
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل الصف الدراسي"
        size="md"
        animation="fade"
      >
        <Form onSubmit={onSubmit}>
          <Form.Label
            htmlFor="level"
            label="الصف الدراسي"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />

          <Form.Input
            type="text"
            name="level"
            defaultValue={levelName.level}
            style="w-full"
            rules={{ required: "يجب ادخال الصف الدراسي" }}
          />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit" type="submit">
              {isPending ? <Spinner color="lightPurple" /> : "حفظ التعديلات"}
            </Button>
            <Button style="outline" size="medium" width="fit" type="reset">
              اغلاق
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default EditLevel;
