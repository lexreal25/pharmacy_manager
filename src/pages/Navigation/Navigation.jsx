import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="nav-layout">
      <ul>
        <li className="list-item">
          <Link to="/dashboard" className="link">
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/inventory" className="link">
            <span>Inventory</span>
          </Link>
        </li>
        <li className="list-item" >
          <Link to="/sales" className="link">
            <span>Sales</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/customers" className="link">
            <span>Customers</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/medicine" className="link">
            <span>Medicine</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/report" className="link">
            <span>Reports</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/settings" className="link">
            <span>Settings</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/logout">
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
