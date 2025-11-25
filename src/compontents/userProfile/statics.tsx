import StaticsBox from "./StaticsBox";
import { GoBook } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
type dataType = {
  title: string;
  ratio: string;
  originalValue?: string;
  icon: React.ReactNode;
};
const Statics = () => {
  const data: dataType[] = [
    {
      title: "الدروس المكتمله",
      ratio: "45",
      originalValue: "55",
      icon: <LiaMedalSolid />,
    },
    {
      title: "ساعات الدراسه",
      ratio: "10",
      icon: <IoTimerOutline />,
    },
    {
      title: "معدل التقدم",
      ratio: "45",
      originalValue: "+12%",
      icon: <HiMiniArrowTrendingUp />,
    },
    {
      title: "الكورسات المسجله",
      ratio: "12",
      originalValue: "+2",
      icon: <GoBook />,
    },
  ];
  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-5">
      {data.map((ele) => {
        return <StaticsBox data={ele} key={ele.title} />;
      })}
    </section>
  );
};

export default Statics;
