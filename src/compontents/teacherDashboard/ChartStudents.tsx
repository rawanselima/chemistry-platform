import { Pie, PieChart, Tooltip } from "recharts";

const data = [
  { month: "يناير", studentsNumber: 400 },
  { month: "فبراير", studentsNumber: 350 },
  { month: "مارس", studentsNumber: 420 },
  { month: "أبريل", studentsNumber: 380 },
  { month: "مايو", studentsNumber: 460 },
  { month: "يونيو", studentsNumber: 300 },
  { month: "يوليو", studentsNumber: 50 },
  { month: "أغسطس", studentsNumber: 48 },
  { month: "سبتمبر", studentsNumber: 390 },
  { month: "أكتوبر", studentsNumber: 520 },
  { month: "نوفمبر", studentsNumber: 410 },
  { month: "ديسمبر", studentsNumber: 45 },
];

export default function CartStudents({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Tooltip
        labelClassName="!text-purple font-bold"
        wrapperClassName="rounded !p-3 !border-light-purple"
        cursor={{ fill: "transparent" }}
        formatter={(value) => [`عدد الطلاب: ${value}`, ""]}
        labelFormatter={(label) => `الشهر: ${label}`}
      />

      <Pie
        data={data}
        dataKey="studentsNumber"
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        fill="#8711c1"
        isAnimationActive={isAnimationActive}
        label
        minAngle={5}
      />
    </PieChart>
  );
}
