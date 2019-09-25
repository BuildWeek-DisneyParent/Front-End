import React from "react";
import {NavigationStyle} from './Styling/NavStyling'
import imagedisney from './img/title.png';
import {Link, NavLink} from "react-router-dom";
const Navigation = () => {
    return (
<NavigationStyle>
        <Link to="/home"><img src={imagedisney} alt="disney" /></Link>
        <nav>
            <NavLink to="/ourstory">Our Story</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Log Out</NavLink>
        </nav>
    </NavigationStyle>
    )
}
export default Navigation;