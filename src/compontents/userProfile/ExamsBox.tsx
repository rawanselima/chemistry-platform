import Button from "../common/Button";
import { FaRegFileAlt } from "react-icons/fa";
const ExamsBox = () => {
  return (
    <div className="bg-white my-3 p-5 rounded">
      <h1 className="font-bold text-dark-purple text-xl py-2 flex items-center gap-1">
        <FaRegFileAlt /> امتحان علي الباب الاول
      </h1>
      <div className="mb-3 text-gray">
        <p>
          وقت البدايه :{" "}
          <span className="font-bold text-purple text-xl"> 11 </span> صباحا
        </p>
        <p>
          وقت الانتهاء :{" "}
          <span className="font-bold text-purple text-xl"> 12 </span> مساء
        </p>
        <p>
          عدد الاسئله :{" "}
          <span className="font-bold text-purple text-xl"> 32 </span> سؤال
        </p>
        <p>
          مده الامتحان :{" "}
          <span className="font-bold text-purple text-xl"> 30 </span> دقيقه
        </p>
      </div>
      <Button style="solid" size="medium" width="full">
        الدخول للامتحان
      </Button>
    </div>
  );
};

export default ExamsBox;
