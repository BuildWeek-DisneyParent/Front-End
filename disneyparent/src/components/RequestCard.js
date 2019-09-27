import React from "react";
import {CardStyle} from "./Styling/CardStyling";

const RequestCard = (props) => {
    // function deleteHandler(e) {
    //     e.preventDefault();
        
    // }
    return (
        <div className="mainstyle">
            <CardStyle>
                    <div className="headers">
                    <h4>12/1/19 at 4:34 pm</h4>
                    </div>
                    <div className="cardinfo">
                    <p>Name: {props.name}</p>
                    <p>Meeting Place: {props.meeting}</p>
                    <p>Time: {props.time}</p>
                    <p>Number of Kids: {props.kids}</p>
           </div>
           
                   <input type="text" placeholder="Ask a question.."/>
                   <button className="btn2">Add</button>
                   <button className="btn3">Delete</button>
           </CardStyle>

        </div>
    )
}

export default RequestCard;