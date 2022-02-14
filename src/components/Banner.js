import React from 'react'
import './Banner.css'
import {Button} from '../GetComponents'
import {useHistory} from 'react-router-dom'

function Banner() {
    const history = useHistory()
    return (
        <div className='banner'>
            <div className='bannerInfo'>
                <h1 className='MT1'>The Greatest Outdoors</h1>
                {<p className='MT1 MB3 subtitle textWhite'>
                    Lists created by AASTU Airbnb.
                </p> }
                <Button
                    className='btn btnBlack'
                    onClick={() => history.push('/search')}
                >  Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
