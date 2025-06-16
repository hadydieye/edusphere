"use client";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Filles",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Garçons",
    count: 53,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-gray-800 rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-white">Étudiants</h1>
        <span className="text-white">⋯</span>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl">👫</span>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky-200 rounded-full" />
          <h1 className="font-bold text-white">1,234</h1>
          <h2 className="text-xs text-gray-400">Garçons (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow-200 rounded-full" />
          <h1 className="font-bold text-white">1,234</h1>
          <h2 className="text-xs text-gray-400">Filles (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;