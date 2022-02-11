import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import logoutIcon  from "@material-ui/icons/SupervisedUserCircleOutlined";
import NotifIcon  from "@material-ui/icons/NotificationsActive";
import SettingIcon  from "@material-ui/icons/Settings";
import CogIcon  from "@material-ui/icons/Reply";
import HelpIcon  from "@material-ui/icons/Help";
import ChevronIcon  from "@material-ui/icons/ChevronRight";
import ArrowIcon from "@material-ui/icons/ArrowBack";
import BoltIcon from "@material-ui/icons/OfflineBolt";

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

   return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input onClick={() => setShowSearch(!showSearch)} type="text" classNamr="searchtxt" placeholder='Where are you Going?'/>
                <SearchIcon onClick={() => history.push('/search')} />
            </div>
            
            <div className='header__right'>
              <p onClick={() => history.push('/new')}  className="becomeAHost">Become a host</p>
                   <LanguageIcon />
                    <Navbar>
                      <NavItem icon={<Avatar />}>
                            <DropdownMenu></DropdownMenu>
                            </NavItem>
                    </Navbar>
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
          <span className="icon-right">{props.rightIcon}</span>
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
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Trips
            </DropdownItem>
            <DropdownItem leftIcon="❤️">My WishList(6)</DropdownItem>
            <DropdownItem leftIcon="🗣">Share Your Experience</DropdownItem>
            <DropdownItem leftIcon="📝">Manage Listings</DropdownItem>
            <DropdownItem
              leftIcon={<SettingIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem 
            leftIcon={<HelpIcon />}
            >Help</DropdownItem>
            <DropdownItem leftIcon={<logoutIcon />} >LogOut</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Settings</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Your Profile Information</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Privacy and Security</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Trip and Travel</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>Payment Options</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Trips</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🔍">Search Trips</DropdownItem>
            <DropdownItem leftIcon="🦘">Find Trips Around You</DropdownItem>
            <DropdownItem leftIcon="🇪🇹">Trips in Ethiopia</DropdownItem>
            <DropdownItem leftIcon="🏖">Trips to Dubai</DropdownItem>
            <DropdownItem leftIcon="✈️">International Trips</DropdownItem>
            <DropdownItem leftIcon="📌">Saved Trips</DropdownItem>
          </div>
        </CSSTransition>
        
      </div>
    );
  }
export default Header