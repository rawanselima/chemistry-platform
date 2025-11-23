import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const MainVideo = () => {
  const navigate = useNavigate();
  return (
    <section className="my-10 ">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl text-dark-purple">
          الدرس الاول معادلات الحديد
        </h1>
        <Button
          style="solid"
          width="fit"
          size="medium"
          onClick={() => navigate(-1)}
        >
          العوده للكورس <FaArrowLeftLong />
        </Button>
      </div>
      <div>
        <video
          width="100%"
          height="100%"
          controls
          className="rounded-lg border-4 border-light-purple"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MainVideo;
