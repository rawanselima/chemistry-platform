import TitleSection from "../common/TitleSection";
import LevelBox from "./LevelBox";
const Levels = () => {
  const colors: string[] = [
    "bg-[#DFD4F4]",
    "bg-[#FFF3D9]",
    "bg-[#FFDAF0]",
    "bg-[#D1F5E4]",
    "bg-[#FEF2F4]",
    "bg-[#EAF6FF]",
  ];
  const levels: string[] = [
    " المستوى الاول الثانوي",
    " المستوى الثاني الثانوي",
    "المستوى الثالث الثانوي",
  ];
  return (
    <section>
      <TitleSection> المستويات الدراسيه</TitleSection>
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {levels.map((level, index) => {
          if (index >= colors.length) index = levels.length - index;
          return <LevelBox level={level} colors={colors[index]} />;
        })}
      </div>
    </section>
  );
};

export default Levels;
