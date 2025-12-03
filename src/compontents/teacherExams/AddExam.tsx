import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";
import QuestionBox from "./QuestionBox";
import { FiPlus } from "react-icons/fi";
import AnswerBox from "./AnswerBox";

type question = {
  id: string;
  value: string;
};
function AddExam({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";
  const styleInput: string =
    "!rounded-none focus:rounded-lg duration-300 bg-white border-b-1 border-b-gray";

  const questionType: question[] = [
    {
      id: "1",
      value: "السؤال نص",
    },
    {
      id: "2",
      value: "ارفاق صوره",
    },
  ];
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="اضافه الاختبار"
        size="lg"
        animation="fade"
      >
        <Form>
          <Form.Label
            htmlFor="lecture"
            label="عنوان الاختبار"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input type="text" name="lecture" focus={true} style="w-full" />
          <Form.Label
            htmlFor="lecture"
            label=" اسم المحاضره"
            style={styleLabel}
          />
          <Form.Input
            type="text"
            name="lecture"
            style="w-full"
            defaultValue="المعادله"
            readonly={true}
          />
          <Form.Label
            htmlFor="time"
            label="وقت الامتحان"
            style="font-bold text-dark-purple text-xl pr-3 mb-3 block"
          />
          <Form.Input
            type="text"
            name="time"
            placeholder="30:00"
            style="w-full"
          />

          <div className="my-5">
            <Button style="solid" size="medium" width="fit">
              <FiPlus />
              اضف سؤال
            </Button>

            <div className="border-1 border-light-purple mt-3 rounded-lg p-3">
              <div className="flex my-3">
                <Form.Select
                  data={questionType}
                  name="questionType"
                  style={`${styleInput} w-1/4`}
                />
                <Form.Input
                  type="text"
                  name="question"
                  style={`${styleInput} w-3/4`}
                  placeholder="نص السؤال"
                />
              </div>
              {/* <Form.Input
                type="file"
                name="questionImage"
                style={`${styleInput} w-[97%]`}
                placeholder="اضف الصوره"
              /> */}
              <AnswerBox />
              <Button style="outline" size="medium" width="fit">
                اضف اجابه
              </Button>
            </div>
          </div>
          <QuestionBox />
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

export default AddExam;
