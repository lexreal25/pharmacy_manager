import React, { useState } from "react";
import "./Report.css";
import SalesChart from "../../components/SalesChart";
import { ExpenesesReport } from "../../components/BarChart";
import CustomizedTables from "../../components/Table";
import salesData from "../../assets/salesData";
import { Card } from "../../components/Card";

export const Report = () => {
  const [range, setRange] = useState("monthly");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleExportPDF = () => {
    alert("PDF Export Coming Soon!");
  };

  const inventorySummary = [
    { status: "Out of Stock", value: 5 },
    { status: "Low Stock", value: 10 },
    { status: "Expired Products", value: 2 },
  ];

  return (
    <div className="report-container">
      {/* TOP SUMMARY */}
      <div className="report-summary">
        <div className="summary-card">
          <h3>Total Sales</h3>
          <p>GH₵ 12,450</p>
        </div>

        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p>GH₵ 4,980</p>
        </div>

        <div className="summary-card">
          <h3>Net Profit</h3>
          <p>GH₵ 7,470</p>
        </div>

        <div className="summary-card">
          <h3>Top Selling Item</h3>
          <p>Paracetamol</p>
        </div>
      </div>

      {/* INVENTORY SUMMARY */}
      <div className="inventory-summary-report">
        <h2>Inventory Summary</h2>

        <div className="inventory-summary-list">
          {inventorySummary.map((item, index) => (
            <div
              key={index}
              className="inventory-summary-item"
              data-status={item.status}
            >
              <Card name={item.status} value={item.value} />
            </div>
          ))}
        </div>
      </div>

      {/* FILTERS */}
      <div className="report-filters">
        <div className="filter-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>View</label>
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <button className="export-pdf-btn" onClick={handleExportPDF}>
          📄 Export PDF
        </button>
      </div>

      {/* SALES VS EXPENSES */}
      <div className="report-charts">
        <div className="chart-card">
          <h2>Sales Overview</h2>
          <SalesChart />
        </div>

        <div className="chart-card">
          <h2>Expenses Overview</h2>
          <ExpenesesReport />
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="recent-section">
        <h2>Recent Sales Activity</h2>
        <CustomizedTables props={salesData} />
      </div>
    </div>
  );
};

export default Report;
