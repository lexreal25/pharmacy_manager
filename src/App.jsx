import React from "react";
import "./App.css";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./pages/CustomersPage/Customers.jsx";
import InventoryPage from "./pages/InventoryPage/Inventory.jsx";
import SalesPage from "./pages/SalesPage/SalesPage.jsx";
import Medicine from "./pages/MedicinePage/Medicine.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />

        <div className="right">
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/Inventory" element={<InventoryPage />} />
            <Route path="/Sales" element={<SalesPage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/medicine" element={<Medicine />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
