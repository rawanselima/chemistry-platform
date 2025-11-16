import Button from "../common/Button";
import Accordion from "./Accordion";
import { chemistryLecturesData } from "./Data";
export default function ContentCourse() {
  return (
    <div className="w-[75%] h-fit mx-auto transition-colors duration-500 p-10 flex justify-between items-center flex-wrap gap-10 ">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-dark-purple dark:text-slate-100 my-2">
          محتوي الكورس
        </h1>
        <p className="text-xl text-gray dark:text-slate-400 my-5">
          دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات
          وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد
          العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني
        </p>
        <div className="flex items-center justify-between mb-10">
          <p className="font-bold text-purple text-3xl "> 300 جنيه </p>
          <Button style="solid" size="large" width="fit">
            اشترك دلوقتي وانضم لأبطالنا
          </Button>
        </div>

        {/* Here we use the reusable component with our data */}
        <Accordion items={chemistryLecturesData} />
      </div>
    </div>
  );
}
