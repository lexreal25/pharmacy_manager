import React from "react";
import { LineChart } from "@mui/x-charts";

export default function SalesChart() {
  // dataset with numbers only
  const dataset = [
    { month: "Jan", sales2024: 100, sales2025: 120 },
    { month: "Feb", sales2024: 200, sales2025: 180 },
    { month: "Mar", sales2024: 150, sales2025: 170 },
    { month: "Apr", sales2024: 250, sales2025: 260 },
    { month: "May", sales2024: 300, sales2025: 310 },
    { month: "Jun", sales2024: 350, sales2025: 400 },
  ];

  // tell the chart which keys to use
  const series = [
    { dataKey: "sales2024", label: "Income(GHS) 2024" },
    { dataKey: "sales2025", label: "Income(GHS) 2025" },
  ];

  return (
    <div style={{ width: "100%", height: 400}}>
      <LineChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]} // month comes from dataset
        series={series} // sales2024 + sales2025 are numeric
        height={400}
      />
    </div>
  );
}
