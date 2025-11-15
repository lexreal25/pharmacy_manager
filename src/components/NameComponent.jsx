import React from "react";
import { useLocation } from "react-router";

const NameComponent = () => {
  const location = useLocation();
  return (
    <h2>
      {location.pathname == "/"
        ? "DASHBOARD"
        : location.pathname.replace(/^\/+/, " ").toLocaleUpperCase()}
    </h2>
  );
};
export default NameComponent;
