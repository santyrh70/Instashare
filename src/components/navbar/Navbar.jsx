import './navbar.scss';
import { texts } from "../../constants/texts";
import { links } from "../../constants/links";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import UserImg from "../userImg/UserImg";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({setSearchValue}) => {


  const location = useLocation();
  console.log(location);

  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item"><Logo/></li>
        <li className="navbar-list-item"><SearchBar setSearchValue={setSearchValue}/></li>
        <li className={`navbar-list-item home ${location.pathname === links.HOME? "focus" : ""}`}><Link to={links.HOME}>{texts.HOME}</Link></li>
        <li className={`navbar-list-item ${location.pathname === links.EXPLORE? "focus" : ""}`}><Link to={links.EXPLORE}>{texts.EXPLORE}</Link></li>
        <li className={`navbar-list-item ${location.pathname === links.SAVED? "focus" : ""}`}><Link to={links.SAVED}>{texts.SAVED}</Link></li>
        <li className="navbar-list-item user"><UserImg/></li>
      </ul>
    </header>
  );
}

export default Navbar;