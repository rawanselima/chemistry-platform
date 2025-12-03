import { GoBook } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
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
      title: "عدد الطلاب",
      ratio: "45",
      originalValue: "+5",
      icon: <LiaMedalSolid />,
    },
    {
      title: "المبيعات",
      ratio: "1000",
      icon: <IoTimerOutline />,
      originalValue: "+30",
    },
    {
      title: "عدد الكورسات",
      ratio: "45",
      originalValue: "-2",
      icon: <GoBook />,
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
