import { Progress } from "@/components/ui/progress";
import { LuClock } from "react-icons/lu";
import Button from "../common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Title = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white border-1 border-light-purple p-5 rounded-lg my-5">
      <div className="flex flex-wrap justify-between items-start">
        <div className="sm:mb-0 mb-2">
          <h1 className="font-bold text-3xl text-dark-purple">
            اختبار الكيمياء - الوحدة الأولى
          </h1>
          <h3 className="text-gray py-1">
            أجب عن جميع الأسئلة واضغط على إرسال عند الانتهاء
          </h3>
        </div>
        <Button
          style="solid"
          width="fit"
          size="medium"
          onClick={() => navigate(-1)}
        >
          العوده للكورس <FaArrowLeftLong />
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-2 my-5 ">
        <div className="flex items-center gap-5 border-2 border-light-purple bg-white p-5 rounded-lg">
          <p className="text-purple text-2xl">
            <LuClock />
          </p>
          <p className="text-gray">
            الوقت المتبقي :<br />
            <span className="font-bold text-dark-purple text-xl">60:00</span>
          </p>
        </div>
        <div className="border-2 border-light-purple bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center text-xl mb-5">
            <p> التقدم : </p>
            <p> 5 من 10 </p>
          </div>
          <Progress
            value={50}
            className="w-full bg-gray-200 [&>div]:bg-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default Title;
