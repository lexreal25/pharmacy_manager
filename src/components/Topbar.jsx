import "./Topbar.css";
import NameComponent from "./NameComponent";
import { SearchButton } from "./SearchButton";
import { useLocation } from "react-router";

const Topbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenuOpen = () => {
  //   setMenuOpen(!menuOpen && alert(`Menu is now opened!`));
  // };

  return (
    <>
      {/* header container */}
      <header>
        <NameComponent />
        {
          useLocation().pathname !== "/dashboard" && <SearchButton />
        }
        {/* <div className="humburger" onClick={toggleMenuOpen}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </header>
    </>
  );
};

export default Topbar;
