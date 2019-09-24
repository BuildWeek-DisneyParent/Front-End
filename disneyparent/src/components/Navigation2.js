import React from "react";
import {Navigation2Style} from "./Styling/Nav2Styling";

const Navigation2 = () => {
    return (
<Navigation2Style>
<nav>
    <button>Post Request</button>
    <a href="/">View Available Request</a>
    <a href="/">Accepted Requests</a>
    <input type="search" placeholder="Find a request..."/>
</nav>
</Navigation2Style>
    )
}
export default Navigation2;