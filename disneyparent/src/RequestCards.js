import React, {useState} from "react";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import ProfileDes from "./components/ProfileDes";
import RequestCard from "./components/RequestCard";
import Footer from "./components/Footer";
import {info} from "./info"

const RequestCards = (props) => {
    const [cards, setCards] = useState(info);

    const addQuestion = info => {
        const newQuestion = [...cards, {info}];
        setCards(newQuestion);
    }
    const removeQuestion = index => {
        const newQuestions = [...cards];
        newQuestions.splice(index, 1);
        setCards(newQuestions);
    }
    return (
<div>
    <Navigation />
    <Navigation2 />
    <div className="mainprofile">
    <ProfileDes />
    {cards.map ((info, index) => (
        <RequestCard 
        key={index}
        index={index}
        info={info} 
        addQuestion= {addQuestion}
        removeQuestion = {removeQuestion}
        />
    ))}
    </div>
    <Footer />

</div>
    )
}
export default RequestCards;