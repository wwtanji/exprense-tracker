import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const COLORS = [
    '#6366F1', 
    '#8B5CF6', 
    '#EC4899', 
    '#FBBF24', 
    '#34D399', 
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      return (
        <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-base text-gray-600">${value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Income</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={40}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-4">
        Total Income: <span className="font-semibold text-gray-900">${totalIncome.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default RecentIncomeWithChart;