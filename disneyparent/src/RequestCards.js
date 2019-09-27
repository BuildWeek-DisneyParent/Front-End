import React from "react";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import ProfileDes from "./components/ProfileDes";
import RequestCard from "./components/RequestCard";
import Footer from "./components/Footer";

const RequestCards = () => {
    return (
<div>
    <Navigation />
    <Navigation2 />
    <div className="mainprofile">
    <ProfileDes />
    <RequestCard />
    </div>
    <Footer />

</div>
    )
}
export default RequestCards;