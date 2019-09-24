import React from "react";
import mom from "./img/mom.png"
import {DesStyle} from "./Styling/DesStyling"

const ProfileDes = () => {
    return (
<DesStyle className="mainstyle">
    <img src={mom} alt="profile" />
    <div>
        <h3>Melissa Roberson</h3>
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
    <button>Edit</button>
</DesStyle>
    )
}
export default ProfileDes;