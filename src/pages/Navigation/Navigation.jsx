import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import "./Navigation.css";
import { LocalShipping, MoneyOff } from "@mui/icons-material";

export const Navigation = () => {
  
  return (
    <div className="nav-layout" style={{overflowY:"scroll"}}>
      <ul>
        <li className="list-item">
          <Link to="/dashboard" className="link">
          <DashboardIcon/>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/inventory" className="link">
          <InventoryIcon/>
            <span>Inventory</span>
          </Link>
        </li>
        <li className="list-item" >
          <Link to="/sales" className="link">
           <ShoppingCartIcon/>
            <span>Sales</span>
          </Link>
        </li>
        <li className="list-item" >
          <Link to="/sales" className="link">
           <MoneyOff/>
            <span>Expenses</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/customers" className="link">
          <PeopleIcon/>
            <span>Customers</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/medicine" className="link">
          <LocalPharmacyIcon/>
            <span>Medicine</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/suppliers" className="link">
          <LocalShipping/>
            <span>Suppliers</span>
          </Link>
        </li>
        
        <li className="list-item">
          <Link to="/report" className="link">
          <BarChartIcon/>
            <span>Reports</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/settings" className="link">
          <SettingsIcon/>
            <span>Settings</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/logout">
          <LogoutIcon/>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
