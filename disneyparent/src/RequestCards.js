import React from "react";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import ProfileDes from "./components/ProfileDes";
import AcceptCard from "./components/AcceptCard";
import Footer from "./components/Footer";

const RequestCards = () => {
    return (
<div>
    <Navigation />
    <Navigation2 />
    <div className="mainprofile">
    <ProfileDes />
    <AcceptCard />
    </div>
    <Footer />

</div>
    )
}
export default RequestCards;