import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";

interface LevelBoxProps {
  level: string;
  colors: string;
}
const LevelBox = ({ level, colors }: LevelBoxProps) => {
  return (
    <div
      className={`${colors} text-lg py-7 px-20 rounded-lg font-bold text-dark-purple cursor-pointer hover:scale-105 transition-all duration-300`}
    >
      <p>{level}</p>
      <Link
        to=""
        className="flex items-center gap-1 text-gray-700 font-medium text-sm pt-2 hover:-translate-x-7 transition-all duration-300"
      >
        استكشف المزيد
        <span className="text-lg ">
          <TiArrowLeft />
        </span>
      </Link>
    </div>
  );
};

export default LevelBox;
