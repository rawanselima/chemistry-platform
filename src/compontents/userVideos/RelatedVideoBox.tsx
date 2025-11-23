import { PiVideoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const RelatedVideoBox = () => {
  return (
    <Link to="/userProfile/course/1/video/2">
      <div className="flex items-center gap-2 my-2 bg-white hover:bg-light-purple/30 border-2 border-light-purple duration-300 transition-all rounded-lg p-3 w-full">
        <PiVideoBold className="text-4xl text-dark-purple" />
        <div>
          <h3 className="font-bold text-xl">درس التاني معادلات الحديد</h3>
          <p className="text-gray"> 53:00 </p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideoBox;
