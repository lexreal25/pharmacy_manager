import React from "react";
import "./Card.css";

export const Card = ({ name, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3 className="card-title">{name}</h3>
        {icon && <span className="card-icon">{icon}</span>}
      </div>

      {value !== undefined && (
        <p className="card-value">{value}</p>
      )}
    </div>
  );
};

export default Card;
