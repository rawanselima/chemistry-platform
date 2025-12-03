import { BiMessageRoundedDots } from "react-icons/bi";
import Button from "../common/Button";
import Ask from "./Ask";
const QuestionBox = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg border-1 border-light-purple my-2">
        <div className="flex items-center items-start gap-2">
          <p className=" w-10 h-10 flex items-center justify-center bg-purple rounded-full text-xl text-white">
            ب
          </p>
          <div>
            <p className="font-bold text-lg">باسم فادي</p>
            <div className="text-gray text-sm">منذ ساعتين</div>
          </div>
        </div>
        <div className="flex justify-between items-start flex-wrap">
          <p className="my-3 text-lg">
            كيف يمكنني حساب السرعة المتوسطة في المسائل المركبة؟
          </p>
          <div className="flex gap-2">
            <Button
              size={window.innerWidth >= 665 ? "medium" : "small"}
              style="solid"
              width="fit"
            >
              <BiMessageRoundedDots className="text-lg" />
              اضافه التعليق
            </Button>
            <Button
              size={window.innerWidth >= 665 ? "medium" : "small"}
              style="outline"
              width="fit"
            >
              <BiMessageRoundedDots className="text-lg" />
              عرض التعليق
            </Button>
          </div>
        </div>
      </div>

      <Ask placeholder="اكتب الاجابه" role="teacher" />
    </>
  );
};

export default QuestionBox;
