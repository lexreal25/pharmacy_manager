import React from "react";
import "./DashboardLayout.css";
import Card from "../../components/Card.jsx";
import SalesChart from "../../components/SalesChart.jsx";


export const DashboardLayout = () => {
  const cards = [
    { name: "Total Sales", value: 10000, icon: "GH₵" },
    { name: "Total Expenses", value: 15, icon: "GH₵" },
    { name: "Total Medicine", value: 13 },
    { name: "Suppliers", value: 20 },
    { name: "Customers", value: 8 },
    // { name: "Employees", value: 5 },
  ];

  const inventorySummary = [
    // { status: "Total Products", value: 150 },
    { status: "Out of Stock", value: 5 },
    { status: "Low Stock", value: 10 },
    { status: "Expired Products", value: 2 },
  ];

  return (
    <div className="dashboard-layout">
      <div className="top">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="lower-section">
        <div className="left-section">
          <div className="inventory-container">
            <h2>Inventory Summary</h2>
            <div className="inventory-summary-list">
              {inventorySummary.map((item, index) => (
                <div
                  key={index}
                  className="inventory-summary"
                  data-status={item.status} // 👈 dynamic attribute
                >
                  <Card name={item.status} value={item.value}  />
                </div>
              ))}
            </div>
          </div>
          <div className="sales-container">
            <h2>Sales Summary</h2>
            <SalesChart />
          </div>
        </div>

        <div className="right-section">
          <div className="expenses-container">
            <h2>Expenses Summary</h2>
            {/* <ExpenesesReport /> */}
          </div>
          <div className="">
            <h2>Inventory Summary</h2>
            <SalesChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
