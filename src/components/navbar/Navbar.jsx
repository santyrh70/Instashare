import './navbar.scss';
import { texts } from "../../constants/texts";
import { links } from "../../constants/links";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/Logo";
import UserImg from "../userImg/UserImg";
import Logout from "../logout/Logout";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import Menu from '../menu/Menu';

const Navbar = ({setSearchValue}) => {


  const location = useLocation();
  const userStatus = useSelector(store => store.fireBase.userStatus);

  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item"><Logo/></li>
        <li className="navbar-list-item"><SearchBar setSearchValue={setSearchValue}/></li>
        <li className={`navbar-list-item home hide-opt ${location.pathname === links.HOME? "focus" : ""}`}><Link to={links.HOME}>{texts.HOME}</Link></li>
        <li className={`navbar-list-item hide-opt ${location.pathname === links.EXPLORE? "focus" : ""}`}><Link to={links.EXPLORE}>{texts.EXPLORE}</Link></li>
        {userStatus === 'logged' && <li className={`navbar-list-item hide-opt ${location.pathname === links.SAVED? "focus" : ""}`}><Link to={links.SAVED}>{texts.SAVED}</Link></li>}
        {userStatus === 'logged' && <Logout className='navbar-list-item logout hide-opt'/>}
        {userStatus !== 'logged' && <li className='navbar-list-item login hide-opt'><Link to={links.LOGIN}>{texts.LOGIN}</Link></li>}
        <li className="navbar-list-item user hide-opt"><UserImg/></li>
        <Menu className="hide-menu"/>
      </ul>
    </header>
  );
}

export default Navbar;