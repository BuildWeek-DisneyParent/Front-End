import React from "react";
import {BottomStyle} from './Styling/FooterStyling'
import twitter from './img/twitter.png'
import facebook from './img/facebook.png'
import github from './img/github.png'
const Footer = () => {
    return (
<BottomStyle>
<div>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={github} alt="github icon" />
        </div>

        <nav>
            <a href="/">Our Story</a>
            <a href="/">Sign Up</a>
            <a href="/">Sign In</a>
        </nav>
        <p>Team Disney Parent 2019</p>
</BottomStyle>
    )
}
export default Footer;