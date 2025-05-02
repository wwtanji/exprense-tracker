import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data, width = "30%", height = 300 }) => {
  const getBarColor = (index) => {
    const colors = ["#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"];
    return colors[index % colors.length];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-lg rounded-lg p-3 border border-green-200">
          <p className="text-sm font-bold text-gray-700 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-base text-gray-600">
            Amount: <span className="font-semibold text-gray-900">${payload[0].payload.amount}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6 p-4 rounded-xl shadow-md">
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} stroke="none" />

          <Tooltip content={CustomTooltip} />

          <Bar dataKey="amount" radius={[8, 8, 0, 0]}>  
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
