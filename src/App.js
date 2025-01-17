import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import KeyMetrics from "./components/KeyMetrics";
import VehicleCountByCounty from "./components/VehicleCountByCounty";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Electric_Vehicle_Population_Data.csv`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("CSV file not found");
        }
        return response.text();
      })
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log("Parsed Data:", result.data);
            setData(result.data);
          },
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);
  
  
  

  return (
    <div>
      <h1>Electric Vehicle Dashboard</h1>
      <KeyMetrics data={data} />
      <VehicleCountByCounty data={data} />
    </div>
  );
};

export default App;
