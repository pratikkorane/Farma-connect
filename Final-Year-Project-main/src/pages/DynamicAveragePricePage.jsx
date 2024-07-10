import React, { useState } from 'react';
import AveragePriceChart from "../components/herosection/AveragePriceChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function DynamicAveragePricePage() {
  // State to manage dynamic data for the chart
  const [dynamicData, setDynamicData] = useState([
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
  ]);

  // Handler function to update the chart
  const handleUpdateChart = () => {
    // You can update the dynamic data here based on user input or any other logic
    // For example, you can fetch data from an API and update the state
    // For demonstration, let's update the prices randomly
    const updatedData = dynamicData.map(item => ({
      ...item,
      avgPrice: Math.floor(Math.random() * 500) // Random price between 0 and 500
    }));
    setDynamicData(updatedData);
  };

  return (
    <div>
      <button onClick={handleUpdateChart}>Update Chart</button>
      <AveragePriceChart data={dynamicData} />
    </div>
  );
}

export default DynamicAveragePricePage;
