import React from "react";
import {NavigationStyle} from './Styling/NavStyling'
import imagedisney from './img/title.png';
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return (
<NavigationStyle>
        <img src={imagedisney} alt="disney" />
        <nav>
            <NavLink to="/ourstory">Our Story</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Log Out</NavLink>
        </nav>
    </NavigationStyle>
    )
}
export default Navigation;