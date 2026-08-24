import React from "react";
import { LineChart } from "@mui/x-charts";

export default function SalesChart() {
  const dataset = [
    { month: "Jan", sales2024: 100, sales2025: 120 },
    { month: "Feb", sales2024: 200, sales2025: 180 },
    { month: "Mar", sales2024: 150, sales2025: 170 },
    { month: "Apr", sales2024: 250, sales2025: 260 },
    { month: "May", sales2024: 300, sales2025: 310 },
    { month: "Jun", sales2024: 350, sales2025: 400 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <LineChart
        dataset={dataset}
        height={400}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            label: "Months",
            tickLabelStyle: {
              fontSize: 14,
              fill: "#374151",
            },
          },
        ]}
        series={[
          {
            dataKey: "sales2024",
            label: "Income (GHS) 2024",
            color: "#1E3A8A",
            curve: "smooth",
            lineWidth: 3,
            valueFormatter: (v) => `GH₵ ${v}`,
          },
          {
            dataKey: "sales2025",
            label: "Income (GHS) 2025",
            color: "#F59E0B",
            curve: "smooth",
            lineWidth: 3,
            valueFormatter: (v) => `GH₵ ${v}`,
          },
        ]}
        grid={{ horizontal: true }}
        sx={{
          "& .MuiChartsLegend-root": {
            padding: "10px",
          },
        }}
      />
    </div>
  );
}
