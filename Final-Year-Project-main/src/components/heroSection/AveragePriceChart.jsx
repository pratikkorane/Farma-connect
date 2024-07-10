import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', avgPrice: 100 },
  { month: 'Feb', avgPrice: 120 },
  { month: 'Mar', avgPrice: 150 },
  { month: 'April', avgPrice: 200 },
  { month: 'May', avgPrice: 250 },
  { month: 'June', avgPrice: 150 },
  { month: 'July', avgPrice: 350 },
  { month: 'Aug', avgPrice: 150 },
  { month: 'Sept', avgPrice: 50 },
  { month: 'Oct', avgPrice: 150 },
  { month: 'Nov', avgPrice: 450 },
  { month: 'Dec', avgPrice: 100 },
  // Add more months and corresponding average prices here
];

const AveragePriceChart = () => {
  return (
    <div>
      <h2>Average Price Per Month</h2>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="avgPrice" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default AveragePriceChart;