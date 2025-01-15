import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const VehicleCountByCounty = ({ data }) => {
  const countyData = data.reduce((acc, row) => {
    const county = row.County;
    acc[county] = (acc[county] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(countyData).map((county) => ({
    county,
    vehicles: countyData[county],
  }));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Vehicle Count by County</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="county" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="vehicles" fill="#82ca9d" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VehicleCountByCounty;
