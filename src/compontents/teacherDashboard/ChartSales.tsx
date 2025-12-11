import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

// #region Sample data
const data = [
  { month: "يناير", sales: 4000 },
  { month: "فبراير", sales: 3500 },
  { month: "مارس", sales: 4200 },
  { month: "أبريل", sales: 3800 },
  { month: "مايو", sales: 4600 },
  { month: "يونيو", sales: 3000 },
  { month: "يوليو", sales: 5000 },
  { month: "أغسطس", sales: 4800 },
  { month: "سبتمبر", sales: 3900 },
  { month: "أكتوبر", sales: 5200 },
  { month: "نوفمبر", sales: 4100 },
  { month: "ديسمبر", sales: 4500 },
];

// #endregion
const ChartSales = () => {
  return (
    <LineChart
      className="mx-0 px-0"
      style={{
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      <Tooltip
        labelClassName="text-purple font-bold"
        wrapperClassName="rounded !p-3 !border-light-purple"
        cursor={{ fill: "transparent" }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="sales"
        name="مبيعات"
        stroke="#8711c1"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default ChartSales;
