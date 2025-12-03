import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";

type levelType = {
  id: string;
  value: string;
};
function AddCourse({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";

  const levels: levelType[] = [
    { id: "1", value: "الصف الاول" },
    { id: "2", value: "الصف الثاني" },
    { id: "3", value: "الصف الثالث" },
  ];
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه الكورس"
        size="lg"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="course"
            label="عنوان الكورس"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input type="text" name="course" style="w-full" focus={true} />

          <div className="flex gap-2 md:flex-nowrap flex-wrap">
            <div className="md:w-1/2 w-full">
              <Form.Label
                htmlFor="price"
                label="سعر الكورس "
                style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
              />
              <Form.Input type="text" name="price" style="w-full" />
            </div>
            <div className="md:w-1/2 w-full">
              <Form.Label
                htmlFor="discount"
                label="التخفيض "
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
            htmlFor="levels"
            label=" المرحله الدراسيه  "
            style={styleLabel}
          />
          <Form.Select
            name="levels"
            style="w-full"
            data={levels}
            defaultValue="اختر المرحله الدراسيه"
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
          />

          <Form.Label htmlFor="img" label="اختر الصوره" style={styleLabel} />
          <Form.Input type="file" name="img" style="w-full" />

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

export default AddCourse;
