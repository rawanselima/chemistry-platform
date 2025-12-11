import TitleDashboard from "@/compontents/common/TitleDashboard";
import ChartSales from "@/compontents/teacherDashboard/ChartSales";
import ChartStudents from "@/compontents/teacherDashboard/ChartStudents";
import Statics from "@/compontents/teacherDashboard/Statics";

const TeacherDashboard = () => {
  return (
    <main className="pb-15" >
      <Statics />
      <div className="grid xl:grid-cols-3 grid-cols-1 mt-5">
        <section className="mt-5 col-span-2">
          <TitleDashboard> المبيعات خلال السنه 2025 </TitleDashboard>
          <ChartSales />
        </section>
        <section className="xl:mt-5 mt-30">
          <TitleDashboard> عدد الطلاب خلال السنه 2025 </TitleDashboard>
          <ChartStudents />
        </section>
      </div>
    </main>
  );
};

export default TeacherDashboard;
