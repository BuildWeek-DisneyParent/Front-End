import React from "react";
import {BottomStyle} from './Styling/FooterStyling';
import twitter from './img/twitter.png';
import facebook from './img/facebook.png';
import github from './img/github.png';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
<BottomStyle>
<div>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={github} alt="github icon" />
        </div>

        <nav>
            <NavLink to="/ourstory">Our Story</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Log Out</NavLink>
        </nav>
        <p>Team Disney Parent 2019</p>
</BottomStyle>
    )
}
export default Footer;