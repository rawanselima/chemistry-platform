import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import QuestionBox from "./QuestionBox";

type Lecture = {
  id: string;
  value: string;
};
function EditExam({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";
  const lectures: Lecture[] = [
    { id: "1", value: "الاسبوع الاول" },
    { id: "2", value: "الاسبوع الثاني" },
    { id: "3", value: "الاسبوع الثالث" },
  ];
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل الاختبار"
        size="lg"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="lecture"
            label="عنوان الاختبار"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="lecture"
            defaultValue={"الباب الاول"}
            style="w-full"
          />
          <Form.Label
            htmlFor="lecture"
            label=" اسم المحاضره"
            style={styleLabel}
          />
          <Form.Select
            name="lecture"
            style="w-full"
            data={lectures}
            defaultValue="2" // id for select option that will be default
          />
          <Form.Label
            htmlFor="time"
            label="وقت الامتحان"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="time"
            defaultValue={"30:00"}
            style="w-full"
          />
          <h1 className={styleLabel}> اسئله الاختبار : </h1>

          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />

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

export default EditExam;
