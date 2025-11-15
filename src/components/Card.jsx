import React from "react";
import "./Card.css";

export const Card = ({ name, value, icon }) => {
  return (
    <div className="dashboard-card">
      <h3 className="card-title">{name}</h3>
      {value && <p className="card-value" >{icon}{value}</p>}
    </div>
  );
};

export default Card;
