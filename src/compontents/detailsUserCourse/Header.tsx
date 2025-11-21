import { IoBookOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import type { JSX } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

type dataType = {
  title: string;
  allLectures?: number;
  hearLectures?: number;
  ratio?: number;
  hours?: number;
  icon: JSX.Element;
};
const Header = () => {
  const navigate = useNavigate();

  const data: dataType[] = [
    {
      title: "عدد المحاضرات",
      allLectures: 20,
      hearLectures: 2,
      icon: <IoBookOutline />,
    },
    {
      title: "نسبة الإنجاز ",
      ratio: 25,
      icon: <LiaMedalSolid />,
    },
    {
      title: " وقت الدراسة ",
      hours: 34,
      icon: <IoMdTime />,
    },
  ];
  return (
    <section className="bg-white rounded-lg border-1 border-light-purple p-5 mt-5">
      <div className="mb-3">
        <div className="flex items-center flex-wrap justify-between">
          <h1 className="md:text-2xl text-lg text-dark-purple font-bold pb-5 md:pb-2">
            كورس الباب الاول معادلات الحديد
          </h1>
          <Button
            style="solid"
            width="fit"
            size="medium"
            onClick={() => navigate("/userProfile/userCourses")}
          >
            العوده للكورسات <FaArrowLeft />
          </Button>
        </div>
        <h3 className="md:text-xl text-lg  text-purple pt-5 md:pt-2">
          الصف الثاني الثانوي
        </h3>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center my-5">
        {data.map((ele: dataType) => {
          return (
            <div className="flex items-center gap-3 mb-2" key={ele.title}>
              <div className="bg-light-purple md:text-3xl text-xl text-dark-purple md:p-4 p-2 rounded-full ">
                {ele.icon}
              </div>
              <div>
                <p className=" text-lg text-gray">{ele.title} :</p>
                <p className="font-bold md:text-2xl text-lg text-dark-purple">
                  {ele.ratio
                    ? `${ele.ratio}%`
                    : ele.hours
                    ? `${ele.hours} ساعه`
                    : `${ele.allLectures} / ${ele.hearLectures}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-gray text-lg mb-5"> التقدم الكلي : </p>
          <p className="font-bold text-purple text-xl"> 50% </p>
        </div>
        <Progress value={50} className="w-full bg-gray-200 [&>div]:bg-purple" />
      </div>
    </section>
  );
};

export default Header;
