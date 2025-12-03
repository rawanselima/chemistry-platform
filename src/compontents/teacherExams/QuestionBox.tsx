import Form from "@/pattern/form/Form";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "../common/Button";
import AnswerBox from "./AnswerBox";
const QuestionBox = () => {
  return (
    <div className="border-2 border-light-purple p-2 rounded my-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg p-4"> السؤال الاول</h3>
        <button className="border-b-1 cursor-pointer text-red-800 border-red-800 flex items-center gap-1 text-sm p-2 ">
          <RiDeleteBin5Line /> حذف السؤال
        </button>
      </div>

      <Form>
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />

        <Button
          style="outline"
          size="medium"
          width="fit"
          additionalStyle="my-5 rounded-lg"
        >
          اضف اجابه
        </Button>
      </Form>
    </div>
  );
};

export default QuestionBox;
