import React from "react";
import Navigation from "./components/Navigation"
import Navigation2 from "./components/Navigation2"
import ProfileEdit from "./components/ProfileEdit"
import PostRequest from "./components/PostRequest"
import Footer from "./components/Footer"

const EditProfile = () => {
    return (
<div>
    <Navigation />
    <Navigation2 />
    <div className="mainprofile">
    <ProfileEdit />
    <PostRequest />
    </div>
    <Footer />

</div>
    )
}
export default EditProfile;