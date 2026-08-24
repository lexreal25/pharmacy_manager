import "./Topbar.css";
import NameComponent from "./NameComponent";
import { SearchButton } from "./SearchButton";
import { useLocation } from "react-router";

const Topbar = () => {
  const location = useLocation();

  return (
    <header className="topbar">
      <NameComponent />

      {location.pathname !== "/dashboard" && <SearchButton />}

      {/* Future hamburger menu */}
      {/* 
      <div className="humburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      */}
    </header>
  );
};

export default Topbar;
