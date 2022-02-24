import React, {useState} from 'react'
import {
    SearchIcon,
    ExpandMoreIcon,
    LanguageIcon,
    DateRangeIcon,
} from '../GetIcons'
import {Avatar, IconButton, Tooltip, Search, Button} from '../GetComponents'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    return (
        <div className='header'>
        
            <div className='headerLeft'>
                <Link to='/'>
                    <img
                        className='headerLogo'
                        src='https://d1.awsstatic.com/product-marketing/rds/airbnb_horizontal_lockup_web.bd87ed2c8e964eb35463744e07a1a0670177bda2.png'
                        alt='airbnb logo'
                    />
                </Link>
            </div>
            <div className='headerCenter'>
                <div className='headerInputContainer'>
                    {isDatePickerOpen && (
                        <div className='datePickerConatiner'>
                            <Search setIsDatePickerOpen={setIsDatePickerOpen} />
                        </div>
                    )}
                    <input type='text' placeholder='Start your search' />
                    <SearchIcon className='colorPrimary' />
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
            {/* <div className='Headertop'> 
                    <Button className='b1'>Places to Stay</Button>
                    <Button className='b2'>Experiences</Button>
                    <Button className='b3'>Online Experiences</Button>
        </div> */}
            <div className='headerRight'>
                <Link to='/becomehost'>
                    <Button className='btn btnPrimaryOutlined'>
                        Become a host
                    </Button>

                </Link>
                {/* <button className='btn btnPrimary'>
                    Become a host
                </button> */}
                <LanguageIcon />
                <ExpandMoreIcon />
                <IconButton>
                    <Avatar src="https://i.makeagif.com/media/7-09-2016/312bHi.gif" />
                    {/*<Avatar src="https://c.tenor.com/ReYkHXTdkU8AAAAd/ethiopia-ethiopia-flag.gif" /> */}

                </IconButton>
            </div>
        </div>
    )
}

export default Header
