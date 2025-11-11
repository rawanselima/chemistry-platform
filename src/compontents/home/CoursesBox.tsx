import Button from "../common/Button";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
const CoursesBox = () => {
  return (
    <div className="bg-white rounded-lg ">
      <div className="w-full h-60 p-3 pb-0">
        <img
          src="/assets/course-1.png"
          alt="courseImg"
          className="w-full h-full object-fit"
        />
      </div>
      <div className=" p-3 bg-[url(/assets/courseBackground.png)] bg-no-repeat bg-center">
        <div>
          <h2 className="font-bold text-dark-purple text-2xl">
            كورس الباب الاول
          </h2>
          <p className="text-lg text-purple py-1"> 250 جنيه </p>
          <p className="text-gray">الصف الاول الثانوي</p>
          <div className="text-sm flex flex-wrap justify-between text-gray my-3 bg-white p-2 rounded w-[95%] shadow ">
            <p className="flex items-center gap-1">
              <MdOndemandVideo /> 25 درس
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineQuiz />2 اختبار
            </p>
            <p className="flex items-center gap-1">
              <IoIosTimer /> 5 ساعه 10 دقائق
            </p>
          </div>
        </div>

        <div className="flex gap-3 my-5">
          <Button style="solid" size="small">
            اشترك اللآن
          </Button>
          <Button style="outline" size="small">
            الدخول للكورس
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesBox;
