"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Lun",
    present: 60,
    absent: 40,
  },
  {
    name: "Mar",
    present: 70,
    absent: 60,
  },
  {
    name: "Mer",
    present: 90,
    absent: 75,
  },
  {
    name: "Jeu",
    present: 90,
    absent: 75,
  },
  {
    name: "Ven",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-white">Présences</h1>
        <span className="text-white">⋯</span>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#9CA3AF" }} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgray",
              backgroundColor: "#1F2937",
              color: "white",
            }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            legendType="circle"
            radius={[0, 0, 0, 0]}
            name="Présent"
          />
          <Bar
            dataKey="absent"
            fill="#CFCEFF"
            legendType="circle"
            radius={[0, 0, 0, 0]}
            name="Absent"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;