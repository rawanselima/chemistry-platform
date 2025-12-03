import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import TitleDashboard from "../common/TitleDashboard";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
const Info = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white p-5 rounded-lg my-3 border-1 border-light-purple flex items-center justify-between flex-wrap">
      <div className=" flex items-center flex-wrap gap-5">
        <div>
          <BsFillPersonFill className="text-3xl w-20 h-20 p-5 text-dark-purple bg-light-purple rounded-full" />
        </div>
        <div>
          <TitleDashboard style="!mb-2">روان محمد سعد سليمه</TitleDashboard>
          <h3 className="text-lg text-gray"> الصف الثالث الثانوي </h3>
          <p className="text-gray text-sm"> كفر الشيخ </p>
        </div>
      </div>

      <Button
        style="solid"
        width="fit"
        size="medium"
        onClick={() => navigate(-1)}
      >
        العوده <FaArrowLeft />
      </Button>
    </section>
  );
};

export default Info;
