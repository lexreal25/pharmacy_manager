import React from "react";
import "./DashboardLayout.css";
import Card from "../../components/Card.jsx";
import SalesChart from "../../components/SalesChart.jsx";
import Report from "../Reports/Report.jsx";

export const DashboardLayout = () => {

 
  return (
    <div className="dashboard-layout">

      {/* DASHBOARD HEADER */}
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Quick insights into sales, inventory, expenses, and system activity.</p>
      </div>

      {/* report */}
      <Report/>
    </div>
  );
};

export default DashboardLayout;
