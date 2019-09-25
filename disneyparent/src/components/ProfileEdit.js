import React from "react";
import blank from "./img/blank.png";
import {Form} from "formik";
import {EditStyle} from "./Styling/EditStyling.js";

const ProfileEdit = () => {
    return (
<EditStyle className="mainstyle">
    <Form>
<div className="image">
<a href="/"><img className="blank" src={blank} alt="profile"/></a>
    </div>
    <div>
        <h3>Melissa Roberson</h3>
            <h4>Parent</h4> 
    </div>
    <div>
        <h3>About Yourself</h3>
            <textarea name="about"/>
    </div>
    <div>
        <h3>Email</h3>
        <input type="email"/>
    </div>
    <div>
        <h3>Phone</h3>
        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]"/>
    </div>
    <button type="submit">Save</button>
    </Form>
</EditStyle>
    )
}
export default ProfileEdit;