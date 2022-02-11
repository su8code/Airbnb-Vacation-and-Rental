import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>

            <p>© 2022 Forth Year Internship Project</p>
            <p>Our Privacy Policy<br /> User Terms and Services <br /> Go to Sitemap <br /> Company Details</p>
        </div>
    )
}

export default Footer