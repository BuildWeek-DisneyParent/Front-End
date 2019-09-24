import React from "react";
import Navigation from "./components/Navigation"
import Navigation2 from "./components/Navigation2"
import ProfileDes from "./components/ProfileDes"
import PostRequest from "./components/PostRequest"
import Footer from "./components/Footer"

const Profile = () => {
    return (
<div>
    <Navigation />
    <Navigation2 />
    <div className= "mainprofile">
    <ProfileDes />
    <PostRequest />
    </div>
    <Footer />

</div>
    )
}
export default Profile;