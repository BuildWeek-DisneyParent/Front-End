import React from "react";
import {CardStyle} from "./Styling/CardStyling";

const AcceptCard = (props) => {
    return (
        <div>
                <div className="mainstyle">
                    <CardStyle>
                            <div className="headers">
                            <h4>9/28/2019 at 12:01pm</h4>
                            </div>
                            <div className="cardinfo">
                                <p>Title: {props.title}</p>
                                <p>Meeting Place: {props.meeting}</p>
                                <p>Time: {props.time}</p>
                                <p>Number of Kids: {props.kids}</p>
                                <div className="second">
                                <button className="btn1">Accept</button>
                   <input type="text" placeholder="Ask a question.."/>
                   </div>
                   <button className="btn2">Add</button>
                   <button className="btn3">Delete</button>
                   </div>
                   </CardStyle>
        
                </div>
                </div>
        
    )
}

export default AcceptCard;