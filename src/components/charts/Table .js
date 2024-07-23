import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const data = [
    { name: 'January', sales: 65 },
    { name: 'February', sales: 59 },
    { name: 'March', sales: 850 },
    { name: 'April', sales: 81 },
    { name: 'May', sales: 656 },
    { name: 'June', sales: 55 },
    { name: 'July', sales: 40 },
  ];

  return (
    <div>
      <LineChart width={600} height={200} data={data} margin={{ top: 45, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;


