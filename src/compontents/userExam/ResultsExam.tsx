import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { FaArrowLeft } from "react-icons/fa6";
const ResultsExam = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white border-1 border-light-purple p-5 rounded-lg my-5 text-center">
      <h1 className="font-bold text-3xl text-dark-purple">نتيجه الاختبار :</h1>
      <Button
        style="solid"
        width="fit"
        size="medium"
        additionalStyle={`absolute  top-5 rounded-lg ${
          window.innerWidth >= 552 ? "left-10" : "left-2"
        } `}
        onClick={() => navigate(-1)}
      >
        العوده <FaArrowLeft />
      </Button>
      <h2 className="text-simon text-2xl my-5"> 25/30 </h2>
      <div className="flex items-center  flex-wrap justify-center gap-5">
        <p className="py-7 px-16 rounded-lg bg-light-purple/30 text-xl">
          إجمالي : <span className="text-gray font-bold text-2xl"> 30 </span>
        </p>
        <p className="py-7 px-16 rounded-lg bg-light-purple/30 text-xl">
          خاطئة: <span className="text-red-800 font-bold text-2xl"> 5 </span>
        </p>
        <p className="py-7 px-16 rounded-lg bg-light-purple/30 text-xl">
          صحيحة: <span className="text-green-600 font-bold text-2xl"> 25 </span>
        </p>
      </div>
    </section>
  );
};

export default ResultsExam;
