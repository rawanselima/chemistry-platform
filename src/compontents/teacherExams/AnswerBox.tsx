import Form from "@/pattern/form/Form";
import { RiDeleteBin5Line } from "react-icons/ri";

const AnswerBox = () => {
  const style: string =
    "w-[90%] !rounded-none focus:rounded-lg duration-300 bg-white border-b-1 border-b-gray";

  return (
    <label htmlFor="question" className="w-full flex items-center relative my-2">
      <Form.Input type="radio" name="question" style="h-5 w-5 " />
      <Form.Input
        type="text"
        name="question"
        defaultValue="الاجابه الاولي"
        style={style}
      />
      <RiDeleteBin5Line className="text-gray hover:text-red-800 cursor-pointer absolute left-10 " />
    </label>
  );
};

export default AnswerBox;
