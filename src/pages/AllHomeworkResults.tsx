import GeneralTable from "@/compontents/common/Table";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import { useNavigate } from "react-router-dom";
import { PiExam } from "react-icons/pi";
import PaginationDiv from "@/compontents/common/Pagination";
import type { ExamResultProps } from "@/typs";
import Form from "@/pattern/form/Form";
const AllHomeworkResults = () => {
  const navigate = useNavigate();

  const columns = [
    { key: "examName", label: "اسم الواجب" },
    { key: "totalQuestions", label: "عدد الاسئلة" },
    { key: "score", label: "النتيجة", style: "font-bold text-lg" },
    { key: "grade", label: "النسبه", style: "text-purple font-bold" },
    {
      key: "correctAnswers",
      label: "عدد الاسئلة الصحيحة",
      style: "text-green-700 font-bold text-lg",
    },
    {
      key: "wrongAnswer",
      label: "عدد الاسئلة الخاطئه",
      style: "text-red-800 font-bold text-lg",
    },
    { key: "finishTime", label: "وقت انهاء الواجب", style: "text-gray" },
  ] satisfies { key: keyof ExamResultProps; label: string; style?: string }[];

  const exams: ExamResultProps[] = [
    {
      id: "1",
      examName: "Mathematics Final",
      totalQuestions: 20,
      score: 18,
      grade: "55%",
      wrongAnswer: 20,
      correctAnswers: 18,
      finishTime: "2025-11-10 10:30",
    },
    {
      id: "2",
      examName: "Physics Midterm",
      totalQuestions: 15,
      score: 12,
      grade: "55%",
      wrongAnswer: 15,
      correctAnswers: 12,
      finishTime: "2025-11-12 09:20",
    },
    {
      id: "3",
      examName: "Chemistry Final",
      totalQuestions: 25,
      score: 22,
      grade: "55%",
      wrongAnswer: 25,
      correctAnswers: 22,
      finishTime: "2025-11-15 11:45",
    },
    {
      id: "4",
      examName: "Biology Quiz",
      totalQuestions: 10,
      score: 8,
      grade: "55%",
      wrongAnswer: 10,
      correctAnswers: 8,
      finishTime: "2025-11-18 14:10",
    },
    {
      id: "5",
      examName: "Computer Science Test",
      totalQuestions: 30,
      score: 28,
      grade: "55%",
      wrongAnswer: 30,
      correctAnswers: 28,
      finishTime: "2025-11-20 16:30",
    },
  ];

  const action = [
    {
      label: "عرض الاجابات",
      function: (row: ExamResultProps) =>
        navigate(`/userProfile/course/1/resultExam/${row.id}`),
    },
  ];

  return (
    <main>
      <section className="mt-10 flex items-center flex-wrap justify-between bg-white p-5 rounded-lg border-1 border-light-purple mb-5">
        <TitleDashboard style="!mb-0">
          <PiExam /> نتائج الواجب
        </TitleDashboard>
        <Form>
          <Form.Input
            type="search"
            name="searchName"
            placeholder="ابحث عن اسم امتحان"
            style="w-60 mt-2"
          />
        </Form>
      </section>
      <section className="bg-white">
        <GeneralTable columns={columns} data={exams} actions={action} />
      </section>

      <section className="my-5">
        <PaginationDiv />
      </section>
    </main>
  );
};

export default AllHomeworkResults;
