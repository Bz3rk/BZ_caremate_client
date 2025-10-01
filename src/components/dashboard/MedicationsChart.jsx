import React from "react";
import {
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
  Legend,
  PieChart,
} from "recharts";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { Meds } from "../../mockData/data";


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="semibold"
      fontFamily="Montserrat"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MedicationsChart = () => {
  const takenCount = Meds.filter((med) => med.taken).length;
  const missedCount = Meds.filter((med) => !med.taken).length;

  const data = [
    { name: "Taken medications", value: takenCount },
    { name: "Missed medications", value: missedCount },
  ];

  return (
    <div className="max-w-[700px] min-w-[350px]  h-[350px] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.3)] lg:col-span-2">
      <div className="flex items-center justify-between rounded-t-md bg-primary-300 text-white p-2">
        <div className=" text-lg font-semibold uppercase bg-primary-300 rounded-t-md text-white font-Montserrat">
          Medications Chart
        </div>
        <ChartPieIcon className="w-8 h-8" />
      </div>

      <ResponsiveContainer width="100%" height="100%" className="pb-14 py-2">
        <PieChart>
          <Pie data={data} outerRadius={120} dataKey="value"        labelLine={false}
        label={renderCustomizedLabel}>
            <Cell fill="#003554" />
            <Cell fill="#006494" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MedicationsChart;
