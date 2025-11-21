import ExamsBox from "./ExamsBox";
import { GrTest } from "react-icons/gr";
const ExamsToday = () => {
  return (
    <section className="max-h-[70vh]">
      <h1 className=" text-3xl font-bold  text-dark-purple flex items-center gap-1">
        {" "}
        <GrTest /> الامتحانات اليوم{" "}
      </h1>
      <div className="p-3 overflow-y-scroll custom-scrollbar h-full ">
        <ExamsBox />
        <ExamsBox />
        <ExamsBox />
        <ExamsBox />
      </div>
    </section>
  );
};

export default ExamsToday;
