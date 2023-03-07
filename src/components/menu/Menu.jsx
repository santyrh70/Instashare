import './menu.scss';
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import menuImg from "../../assets/images/menu.png";
import { links } from "../../constants/links";
import { texts } from "../../constants/texts";
import Logout from "../logout/Logout";
import { useEffect, useState } from 'react';

const Menu = ({className}) => {
  const location = useLocation();
  const userStatus = useSelector(store => store.fireBase.userStatus);
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className={`menu ${className}`}>
      <img className="menu-img" src={menuImg} alt="Menu" onClick={() => setShowMenu(true)}/>
      <div className={`menu__content ${ showMenu ? 'menu__content--show' : '' }`}>
        <li className={`menu__item home ${location.pathname === links.HOME? "focus" : ""}`} onClick={() => hideMenu()}><Link to={links.HOME}>{texts.HOME}</Link></li>
        <li className={`menu__item ${location.pathname === links.EXPLORE? "focus" : ""}`} onClick={() => hideMenu()}><Link to={links.EXPLORE}>{texts.EXPLORE}</Link></li>
        {userStatus === 'logged' && <li className={`menu__item ${location.pathname === links.SAVED? "focus" : ""}`} onClick={() => hideMenu()}><Link to={links.SAVED}>{texts.SAVED}</Link></li>}
        {userStatus === 'logged' && <Logout className='menu__item logout' onClick={() => hideMenu()}/>}
        {userStatus !== 'logged' && <li className='menu__item login' onClick={() => hideMenu()}><Link to={links.LOGIN}>{texts.LOGIN}</Link></li>}
      </div>
    </div>
  )
}

export default Menu;