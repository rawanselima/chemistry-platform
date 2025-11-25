import Button from "../common/Button";
import { LiaMedalSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
const ExamsBox = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-wrap justify-between p-5 my-3 rounded-lg border-1 border-light-purple bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-light-purple p-3 text-purple text-2xl rounded-lg ">
          <LiaMedalSolid />
        </div>
        <div>
          <h2 className="md:text-xl text-lg font-bold text-dark-purple">
            اختبار - المتتابعات والمتسلسلات
          </h2>
          <div className="flex items-center justify-between text-sm my-1">
            <p className="text-gray flex items-center gap-1"> 30 سؤال </p>
            <p className="text-gray flex items-center gap-1"> 30 دقيقه </p>
            <p className="text-purple flex items-center gap-1">
              {" "}
              النتيجه 20/25{" "}
            </p>
          </div>
        </div>
      </div>
      {/*  can exam not complete and close for specific time  */}
      <div className="md:mt-0 mt-5 flex items-center gap-2">
        <span className="text-green-800 bg-green-100 text-sm font-bold rounded-xl py-2 px-5">
          مكتمل
        </span>
        <Button
          style="solid"
          width="fit"
          size="medium"
          onClick={() => navigate("1")} //if go to exam
          // onClick={() => navigate("/userProfile/course/1/resultExam/1")}
        >
          عرض النتيجه
        </Button>
      </div>
    </div>
  );
};

export default ExamsBox;
