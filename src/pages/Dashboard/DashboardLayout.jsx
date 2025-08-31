import React from "react";
import "./DashboardLayout.css";
import Card from "../../components/Card.jsx";
import SalesPage from "../SalesPage/SalesPage.jsx";
import Customers from "../CustomersPage/Customers.jsx";
import InventoryPage from "../InventoryPage/Inventory.jsx";
import Medicine from "../MedicinePage/Medicine.jsx";

export const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="top">
        <Card name="Total Sales" value={10000} icon='GH&#8373;' />
        <Card name="Total Expenses" value={15} icon='GH&#8373;' />
        <Card name="Total Medicine" value={13} />
        <Card name="Suppliers" value={20}  />
        <Card name="Customers" value={8} />
      </div>

      <div className="lower-section">
        <div className="left-section">
          <div className="sales-container">
            <h2>Sales List</h2>
            <SalesPage />
          </div>
          <div className="customers-container">
            <h2>Customers List</h2>
            <Customers />
          </div>
        </div>

        <div className="right-section">
          <h2>Medicine List</h2>
          <Medicine />
          <h2>Inventory</h2>
          <InventoryPage />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
