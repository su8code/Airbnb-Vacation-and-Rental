import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import airbnb from "./assets/airbnb.png"
import { useState} from 'react';
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'
import DateRangeIcon from '@material-ui/icons/DateRange'

import Search from './Search'
function Header() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const [navbar , setNavbar] = useState("true");  
  const [slidingBarValue , setSliderValue] = useState(15);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    
  const changeBackground = ()=> {
      if(window.scrollY  < 30) {
          setNavbar(true)
      } else{
          setNavbar(false)
      } 
      
      setSliderValue(window.scrollY)
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


                <div className='headerInputContainer'>
                    {isDatePickerOpen && (
                        <div className='datePickerConatiner'>
                            <Search setIsDatePickerOpen={setIsDatePickerOpen} />
                        </div>
                    )}
                </div>
                <div className='headerDatePickerContainer'>
                    <Tooltip
                        title={
                            <p className='tooltip'>
                                {isDatePickerOpen
                                    ? 'Hide Dates'
                                    : 'Search Dates'}
                            </p>
                        }
                        aria-label='select-dates'
                    >
                        <DateRangeIcon
                            className='iconCustom'
                            onClick={() =>
                                setIsDatePickerOpen(!isDatePickerOpen)
                            }
                        />
                        
                    </Tooltip>
                </div>

            </div>
            
            <div className='header__right'>

                <Link to='/services'>
                    <Button className='btn btnPrimaryOutlined'>
                        Services
                    </Button>

                </Link>
                       <Link to='/aboutus'>
                    <Button className='btn btnPrimaryOutlined'>
                       About us
                    </Button>
                  
                </Link>
                <Link to='/contact'>
                    <Button className='btn btnPrimaryOutlined'>
                        Contact Us
                    </Button>

                </Link>
                
                <Link to='/new'>
                    <Button className='btn btnPrimaryOutlined'>
                        New
                    </Button>

                </Link>
                <LanguageIcon />
                <ExpandMoreIcon />
                <IconButton>
                    
                    <Avatar src="https://bestanimations.com/media/color-full-earth/1772715593earth-spinning-rotating-animation-25.gif" />

                </IconButton>

                
            </div>
            
        </div>
    )
}

export default Header