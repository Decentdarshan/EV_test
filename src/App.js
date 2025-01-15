import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import VehicleCountByCounty from "./components/VehicleCountByCounty";
import KeyMetrics from "./components/KeyMetrics";

const App = () => {
  const [data, setData] = useState([]);

  // Load and parse the CSV file
  useEffect(() => {
    Papa.parse("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      complete: (result) => setData(result.data),
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Electric Vehicle Insights Dashboard</h1>
      {data.length > 0 ? (
        <>
          <KeyMetrics data={data} />
          <VehicleCountByCounty data={data} />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;
