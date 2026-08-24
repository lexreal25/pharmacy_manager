import React from "react";
import "./SearchButton.css";

export const SearchButton = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search item..." id="search-box" />
      <button type="submit" id="search-btn">Search</button>
    </div>
  );
};
