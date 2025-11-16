import { useState, useRef } from "react";
import type { LectureItem } from "./Data";
import { RiFileTextFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { GiStopwatch } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { PiGraduationCapFill } from "react-icons/pi";
import { TfiStatsUp } from "react-icons/tfi";
import { TfiStatsDown } from "react-icons/tfi";
import { ImEnter } from "react-icons/im";
import { GrCompliance } from "react-icons/gr";
import { MdMapsHomeWork } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { MdVideoFile } from "react-icons/md";
interface NestedAccordionProps {
  items: LectureItem[];
}

export default function NestedAccordion({ items }: NestedAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const style: string = "flex items-center gap-1 mb-1 text-dark-purple";
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="border rounded-md">
            <button
              className="w-full text-left p-3 bg-gray-100 dark:bg-slate-700 flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <div className="flex flex-col">
                <span className="font-medium flex items-center gap-1 text-lg">
                  {item.type === "video" || item.type === "video-summary" ? (
                    <PiVideoFill />
                  ) : item.type === "homework" ? (
                    <MdMapsHomeWork />
                  ) : item.type === "quiz" ? (
                    <MdQuiz />
                  ) : item.type === "file" ||
                    item.type === "homework-solution-summary" ? (
                    <IoDocumentText />
                  ) : item.type === "homework-solution" ? (
                    <MdVideoFile />
                  ) : (
                    ""
                  )}
                  {item.title}
                </span>
              </div>
              <span
                className={`transition-transform text-lg ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* محتوى الـ accordion مع transition تدريجي */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: isOpen
                  ? contentRefs.current[index]
                    ? `${contentRefs.current[index]!.scrollHeight}px`
                    : "0px"
                  : "0px",
              }}
              className="overflow-hidden transition[max-height] duration-500 ease-in-out"
            >
              <div className="p-3 bg-gray-50 dark:bg-slate-800">
                <p className={style}>
                  <RiFileTextFill /> الوصف :
                  <span className="text-simon"> {item.description}</span>
                </p>
                {item.totalWatchedPercent && (
                  <p className={style}>
                    <GiStopwatch /> تم المشاهدة:
                    <span className="text-simon">
                      {item.totalWatchedPercent}
                    </span>
                  </p>
                )}
                {item.durationMinutes && (
                  <span className={style}>
                    <FaRegClock /> المدة:
                    <span className="text-simon">
                      {item.durationMinutes} دقيقة
                    </span>
                  </span>
                )}
                {item.questionsCount && (
                  <p className={style}>
                    <BsFillPatchQuestionFill /> عدد الأسئلة:
                    <span className="text-simon"> {item.questionsCount} </span>
                  </p>
                )}
                {item.averageResult && (
                  <p className={style}>
                    <PiGraduationCapFill /> متوسط النتيجة:{" "}
                    <span className="text-simon"> {item.averageResult} </span>
                  </p>
                )}
                {item.minResult && (
                  <p className={style}>
                    <TfiStatsDown /> أقل نتيجة:{" "}
                    <span className="text-simon"> {item.minResult} </span>
                  </p>
                )}
                {item.maxResult && (
                  <p className={style}>
                    <TfiStatsUp /> أعلى نتيجة:{" "}
                    <span className="text-simon"> {item.maxResult} </span>
                  </p>
                )}
                {item.attempts !== undefined && (
                  <p className={style}>
                    <ImEnter /> عدد المحاولات:{" "}
                    <span className="text-simon"> {item.attempts} </span>
                  </p>
                )}
                {item.completions !== undefined && (
                  <p className={style}>
                    <GrCompliance /> عدد مرات الإكمال :{" "}
                    <span className="text-simon"> {item.completions} </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
