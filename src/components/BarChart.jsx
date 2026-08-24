import React from "react";
import { BarChart } from "@mui/x-charts";

export const ExpenesesReport = () => {
  const dataset = [
    { month: "Jan", expenses2024: 100, expenses2025: 120 },
    { month: "Feb", expenses2024: 200, expenses2025: 180 },
    { month: "Mar", expenses2024: 150, expenses2025: 170 },
    { month: "Apr", expenses2024: 250, expenses2025: 260 },
    { month: "May", expenses2024: 300, expenses2025: 310 },
    { month: "Jun", expenses2024: 350, expenses2025: 400 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <BarChart
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
            dataKey: "expenses2024",
            label: "Expenses (GHS) 2024",
            color: "#1E3A8A",
            valueFormatter: (v) => `GH₵ ${v}`,
            barRadius: 6,
          },
          {
            dataKey: "expenses2025",
            label: "Expenses (GHS) 2025",
            color: "#F59E0B",
            valueFormatter: (v) => `GH₵ ${v}`,
            barRadius: 6,
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
};
