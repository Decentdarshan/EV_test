import React from "react";

const KeyMetrics = ({ data }) => {
  const totalVehicles = data.length;

  const averageRange = (
    data.reduce((sum, row) => sum + (parseInt(row["Electric Range"]) || 0), 0) / totalVehicles
  ).toFixed(2);

  const topMake = data.reduce((acc, row) => {
    const make = row["Make"]?.trim();
    if (make) acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  const mostPopularMake = Object.keys(topMake).length > 0
    ? Object.keys(topMake).reduce((a, b) => (topMake[a] > topMake[b] ? a : b))
    : "No data";

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
      <div>
        <h3>Total Vehicles</h3>
        <p>{totalVehicles}</p>
      </div>
      <div>
        <h3>Average Electric Range</h3>
        <p>{averageRange} miles</p>
      </div>
      <div>
        <h3>Most Popular Make</h3>
        <p>{mostPopularMake}</p>
      </div>
    </div>
  );
};

export default KeyMetrics;
