import { RiTimerFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import StaticsBox from "../userProfile/StaticsBox";
type dataType = {
  title: string;
  ratio: string;
  originalValue?: string;
  icon: React.ReactNode;
};
const Statics = () => {
  const data: dataType[] = [
    {
      title: "اسئله اليوم",
      ratio: "45",
      icon: <FaBell />,
    },
    {
      title: "في انتظار الرد",
      ratio: "10",
      icon: <RiTimerFill />,
    },
    {
      title: "تم الرد عليها",
      ratio: "45",
      icon: <FaCircleCheck />,
    },
  ];
  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5">
      {data.map((ele) => {
        return <StaticsBox data={ele} key={ele.title} />;
      })}
    </section>
  );
};

export default Statics;
