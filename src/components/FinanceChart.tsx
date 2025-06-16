"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    revenus: 4000,
    depenses: 2400,
  },
  {
    name: "Fév",
    revenus: 3000,
    depenses: 1398,
  },
  {
    name: "Mar",
    revenus: 2000,
    depenses: 9800,
  },
  {
    name: "Avr",
    revenus: 2780,
    depenses: 3908,
  },
  {
    name: "Mai",
    revenus: 1890,
    depenses: 4800,
  },
  {
    name: "Jun",
    revenus: 2390,
    depenses: 3800,
  },
  {
    name: "Jul",
    revenus: 3490,
    depenses: 4300,
  },
  {
    name: "Aoû",
    revenus: 3490,
    depenses: 4300,
  },
  {
    name: "Sep",
    revenus: 3490,
    depenses: 4300,
  },
  {
    name: "Oct",
    revenus: 3490,
    depenses: 4300,
  },
  {
    name: "Nov",
    revenus: 3490,
    depenses: 4300,
  },
  {
    name: "Déc",
    revenus: 3490,
    depenses: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-gray-800 rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-white">Finances</h1>
        <span className="text-white">⋯</span>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgray",
              backgroundColor: "#1F2937",
              color: "white",
            }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="revenus"
            stroke="#C3EBFA"
            strokeWidth={5}
            name="Revenus"
          />
          <Line
            type="monotone"
            dataKey="depenses"
            stroke="#CFCEFF"
            strokeWidth={5}
            name="Dépenses"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;