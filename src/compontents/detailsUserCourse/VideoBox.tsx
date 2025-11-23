import { IoVideocamOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import Button from "../common/Button";
import { GoIssueClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const VideoBox = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-wrap justify-between p-5 my-3 rounded-lg border-1 border-light-purple bg-white">
      <div className="flex items-center gap-2">
        <div className="bg-light-purple p-3 text-purple text-2xl rounded-lg ">
          <IoVideocamOutline />
        </div>
        <div>
          <h2 className="md:text-xl text-lg font-bold text-dark-purple">
            المقدمة - المتتابعات والمتسلسلات
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray flex items-center gap-1">
              <IoMdTime /> 45:23
            </p>
            {/* when view be 100% it will be اعاده المشاهده and appear correct icon with color green */}
            <p className="text-gray flex items-center gap-1">شاهدت 22%</p>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-5 flex items-center gap-2">
        <span className="text-green-600 text-2xl">
          <GoIssueClosed />
        </span>{" "}
        <Button
          style="solid"
          width="fit"
          size="medium"
          onClick={() => navigate("video/1")}
        >
          اعاده مشاهده
        </Button>
      </div>
    </div>
  );
};

export default VideoBox;
