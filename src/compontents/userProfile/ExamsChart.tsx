import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "اختبار الباب الاول",
    percentage: 10,
  },
  {
    name: "اختبار الايونات",
    percentage: 45,
  },
  {
    name: "اختبار المعادلات",
    percentage: 30,
  },
  {
    name: "اختبار الباب التاني ",
    percentage: 86,
  },
  {
    name: "اختبار معادلات الحديد",
    percentage: 50,
  },
  {
    name: "اختبار العضويه",
    percentage: 100,
  },
];

// #endregion
export default function ExamsChart() {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[900px]">
          <LineChart
            style={{
              width: "100%",
              height: "70vh",
            }}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, "النسبة المئوية"]} />

            <Line
              type="monotone"
              dataKey="percentage"
              stroke="#411467"
              fill="#411467"
            />
          </LineChart>
        </div>
      </div>
    </>
  );
}
