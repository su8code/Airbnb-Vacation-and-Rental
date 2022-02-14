import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import logoutIcon  from "@material-ui/icons/SupervisedUserCircleOutlined";
import NotifIcon  from "@material-ui/icons/NotificationsActive";
import SettingIcon  from "@material-ui/icons/Settings";
import CogIcon  from "@material-ui/icons/Reply";
import HelpIcon  from "@material-ui/icons/Help";
import airbnb from "./assets/airbnb.png"

import Menubutton from "@material-ui/icons/Menu"

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const [navbar , setNavbar] = useState("true");

  const changeBackground = ()=> {
      if(window.scrollY  < 30) {
          setNavbar(true)
      } else{
          setNavbar(false)
      }    
  }
  window.addEventListener('scroll' , changeBackground);

   return (
        <div className={ navbar? 'header active' : 'header'}>
            <Link to='/'>
                <img
                    className="header__icon"
                    src={airbnb}
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input onClick={() => setShowSearch(!showSearch)} type="text" classNamr="searchtxt" placeholder='Start Your Search'/>
                <SearchIcon onClick={() => history.push('/search')} className="searchIcon"/>
            </div>
            
            <div className='header__right'>
              <p onClick={() => history.push('/new')}  className="becomeAHost">Become a Host</p>
                   <LanguageIcon className="languageIcon"/>

                   <div className="MenuButtonBox">
                        <Menubutton />
                        <Navbar>
                          <NavItem icon={<Avatar />}>
                                <DropdownMenu></DropdownMenu>
                                </NavItem>
                        </Navbar>
                    </div>
            </div>
            
        </div>

    )
}

function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  

    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
        </a>
      );
    }
    return(
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem            
            leftIcon="👤" 
            >Sign In</DropdownItem>
            <DropdownItem
             leftIcon={<NotifIcon />}
            >Sign Up</DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              >
              Our Services
            </DropdownItem>
            <DropdownItem
              leftIcon={<SettingIcon />}
              >
              Contact Us
            </DropdownItem>
            <DropdownItem 
            leftIcon={<HelpIcon />}
            >About Us</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
export default Header