import React, { useState } from "react";
import "./Topbar.css";
import NameComponent from "./NameComponent";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen && alert(`Menu is now opened!`));
  };

  return (
    <>
      {/* header container */}
      <header>
        <NameComponent />
        <div className="humburger" onClick={toggleMenuOpen}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </>
  );
};

export default Topbar;
