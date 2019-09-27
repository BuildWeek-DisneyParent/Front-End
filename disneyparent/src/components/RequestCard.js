import React, {useState} from "react";
import {CardStyle} from "./Styling/CardStyling";
import {Form} from "formik";

const RequestCard = (props, {addQuestion, removeQuestion}) => {
    const [value, setValue] = useState("");

     const handleSubmit =(e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    addQuestion(value);
    setValue('');
     }

    return (
        <div className="mainstyle">
            <CardStyle>
                    <div className="headers">
                    <h4>12/1/19 at 4:34 pm</h4>
                    </div>
                    <div className="cardinfo">
                    <p>Name: {props.info.name}</p>
                    <p>Meeting Place: {props.info.meeting}</p>
                    <p>Time: {props.info.time}</p>
                    <p>Number of Kids: {props.info.children}</p>
           </div>
                    <Form onSubmit= {handleSubmit}>
                   <input 
                   type="text" 
                   placeholder="Ask a question.." 
                   value= {value}
                   onChange= {e => setValue(e.target.value)}
                    />
                   <button 
                   type= "Submit" 
                   className="btn2">Add</button>
                   </Form>
                   <button onClick = {(index) => removeQuestion(index) } type="Submit" className="btn3">Delete</button>
                   
           </CardStyle>

        </div>
    )
}

export default RequestCard;