import React from "react";
import {CardStyle} from "./Styling/CardStyling";

const RequestCard = () => {
    return (
        <div className="mainstyle">
            <CardStyle>
                    <div className="headers">
                    <h4>12/1/19 at 4:34 pm</h4>
                    <h4>#1</h4>
                    </div>
                    <div className="cardinfo">
                        <p>Name: Amber Riddleston</p>
                        <p>Meeting Place: Fantasyland</p>
                        <p>Time: 10 AM</p>
                        <p>Number of Kids: 4</p>
           </div>
           <input type="text" placeholder="Ask a question.."/>
           <button className="btn2">Add</button>
           </CardStyle>

        </div>
    )
}

export default RequestCard;