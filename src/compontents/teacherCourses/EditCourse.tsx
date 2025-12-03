import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";

type levelType = {
  id: string;
  value: string;
};
function EditCourse({
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
        title="تعديل الكورس"
        size="lg"
        animation="fade"
      >
        <Form>
          <Form.Label
            label="عنوان الكورس"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
            htmlFor="course"
          />
          <Form.Input
            type="text"
            name="course"
            defaultValue={"الباب الاول"}
            style="w-full"
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
                defaultValue="250"
              />
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
                defaultValue="20"
              />
            </div>
          </div>
          <Form.Label
            label=" المرحله الدراسيه  "
            htmlFor="levels"
            style={styleLabel}
          />
          <Form.Select
            name="levels"
            style="w-full"
            data={levels}
            defaultValue="2" // id for select option that will be default
          />
          <Form.Label
            label="وصف الكورس"
            htmlFor="description"
            style={styleLabel}
          />
          <Form.Textarea
            style="w-full h-30"
            name="description"
            defaultValue="دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني"
          />
          <Form.Label label="تغيير الصوره" style={styleLabel} htmlFor="img" />
          <Form.Input type="file" name="img" style="w-full" />
          <img
            src="/assets/course-1.png"
            alt="صوره الكورس"
            className="w-3/4 h-50 object-fit mx-auto mt-5 "
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

export default EditCourse;
