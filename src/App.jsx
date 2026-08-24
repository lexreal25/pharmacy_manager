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
import Report from "./pages/Reports/Report.jsx";
import Settings from "./pages/SettingPage/SettingsPage.jsx";
import SuppliersPage from "./pages/SuppliersPage/SuppliersPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />
        <div className="right">
          <Topbar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/dashboard" element={<DashboardLayout />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/sales" element={<SalesPage />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/report" element={<Report />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<DashboardLayout />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
