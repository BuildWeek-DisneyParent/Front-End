import React from "react";
import {NavigationStyle} from './Styling/NavStyling'
import imagedisney from './img/title.png';

const Navigation = () => {
    return (
<NavigationStyle>
        <img src={imagedisney} alt="disney" />
        <nav>
            <a href="/">Our Story</a>
            <a href="/">Profile</a>
            <a href="/">Sign Out</a>
        </nav>
    </NavigationStyle>
    )
}
export default Navigation;