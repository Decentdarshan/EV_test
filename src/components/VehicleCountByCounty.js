import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const VehicleCountByCounty = ({ data }) => {
  const countyCounts = data.reduce((acc, row) => {
    const county = row["County"]?.trim();
    if (county) acc[county] = (acc[county] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(countyCounts).map((county) => ({
    name: county,
    count: countyCounts[county],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Vehicle Count by County</h3>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VehicleCountByCounty;
