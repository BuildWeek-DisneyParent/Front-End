import React from "react";
import blank from "./img/blank.png"
import {DesStyle} from "./Styling/DesStyling"
import {Link} from "react-router-dom";

const ProfileDes = () => {
    return (
<DesStyle className="mainstyle">
<img className="blank" src={blank} alt="profile"/>
    <div>
        <h3>Melissa Robertson</h3>
            <h4>Parent</h4> 
    </div>
    <div>
        <h3>About Yourself</h3>
            <p>lorem ipsum</p>
    </div>
    <div>
        <h3>Email</h3>
            <h4>m.robertson@gmail.com</h4> 
    </div>
    <div>
        <h3>Phone</h3>
            <h4>306-120-2521</h4> 
    </div>
    <Link to="/editprofile"><button>Edit</button></Link>
</DesStyle>
    )
}
export default ProfileDes;