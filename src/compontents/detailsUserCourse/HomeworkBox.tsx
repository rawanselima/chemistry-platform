import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { FaRegFileAlt } from "react-icons/fa";
const HomeworkBox = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-wrap justify-between p-5 my-3 rounded-lg border-1 border-light-purple bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-light-purple p-3 text-purple text-2xl rounded-lg ">
          <FaRegFileAlt />
        </div>
        <div>
          <h2 className="md:text-xl text-lg font-bold text-dark-purple">
            واجب - المتتابعات والمتسلسلات
          </h2>
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray flex items-center gap-1 my-1">
              موعد التسليم:25-10-2025
            </p>
            {/* when view be 100% it will be اعاده المشاهده and appear correct icon with color green */}
            <p className="text-purple flex items-center gap-1">الدرجة 25/25</p>
          </div>
        </div>
      </div>
      {/*  if status is done will appear تم التسليم و button is عرض and if not stautus is قيد الانتظار and button is حل الواجب    */}
      <div className="md:mt-0 mt-5 flex items-center gap-2">
        <span className="text-green-800 bg-green-100 text-sm font-bold rounded-xl py-2 px-5">
          تم التسليم
        </span>{" "}
        <Button
          style="solid"
          width="fit"
          size="medium"
          // onClick={() => navigate("1")}
          onClick={() => navigate("/userProfile/course/1/resultHomework/1")}
        >
          حل الواجب
        </Button>
      </div>
    </div>
  );
};

export default HomeworkBox;
