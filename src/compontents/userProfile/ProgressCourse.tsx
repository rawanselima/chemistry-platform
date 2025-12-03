import { Progress } from "@/components/ui/progress";
import TitleDashboard from "../common/TitleDashboard";
import { NavLink } from "react-router-dom";

const ProgressCourse = () => {
  return (
    <section className="mt-10">
      <TitleDashboard> جميع الكورسات المشتركه </TitleDashboard>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <NavLink to="course/1" >
          <div className="bg-white p-3 border-1 border-light-purple rounded-lg">
            <img
              src="/assets/course-1.png"
              alt="courseImg"
              className="w-full h-60 object-cover "
            />
            <div>
              <h3 className="font-bold text-xl py-2 text-dark-purple">
                الباب الاول معادلات الحديد
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-gray text-lg pb-3 "> التقدم : </p>
                <p className="font-bold text-purple"> 20% </p>
              </div>
              <Progress
                className="w-full bg-gray-200 [&>div]:bg-purple" // bg-gray-200 للtrack، bg-purple-700 للتقدم
                value={20}
              />
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default ProgressCourse;
