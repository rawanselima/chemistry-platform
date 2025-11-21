import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "السبت", hours: 1, ActiveHours: 5 },
  { name: "الاحد", hours: 2, ActiveHours: 2 },
  { name: "الاتنين ", hours: 3, ActiveHours: 0 },
  { name: "الثلاثاء", hours: 4, ActiveHours: 3 },
  { name: "الاربعاء", hours: 5, ActiveHours: 5 },
  { name: "الخميس", hours: 6, ActiveHours: 6 },
  { name: "الجمعه", hours: 7, ActiveHours: 2 },
];

const VideosChart = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px]">
        <AreaChart
          style={{
            width: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <YAxis
            dataKey="hours"
            // ticks={[0, 1000, 2000, 3000, 4000]}
            tick={{ fill: "#411467" }}
            axisLine={{ stroke: "#411467" }}
            tickLine={{ stroke: "#411467" }}
          />

          <Tooltip formatter={(value) => [`${value} ساعه`, "الساعات النشطه"]} />

          <Area
            type="monotone"
            dataKey="ActiveHours"
            stroke="#411467"
            fill="#411467"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default VideosChart;
