import React from "react";
import {Navigation2Style} from "./Styling/Nav2Styling";
import {NavLink} from "react-router-dom";

const Navigation2 = () => {
    return (
<Navigation2Style>
<nav>
<NavLink to="/profile"><button>Post Request</button></NavLink>
<NavLink to="/availablerequests">View Available Request</NavLink>
    <a href="/acceptedrequests">Accepted Requests</a>
    <input type="search" placeholder="Find a request..."/>
</nav>
</Navigation2Style>
    )
}
export default Navigation2;