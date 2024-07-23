import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const data = [
    { name: 'January', sales: 165 },
    { name: 'February', sales: 529 },
    { name: 'March', sales: 280 },
    { name: 'April', sales: 851 },
    { name: 'May', sales: 566 },
    { name: 'June', sales: 55 },
    { name: 'July', sales: 440 },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={data} margin={{ top: 45, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="33" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;
