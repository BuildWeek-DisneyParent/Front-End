import React from "react";
import {Form} from "formik"
import {RequestStyle} from "./Styling/RequestStyling"

const PostRequest= () => {
    return (
<RequestStyle className="mainstyle">
    <Form className="forms">
        <h4>Create a new Post Request</h4>
        <p>Name:</p>
        <input className="posts" type="text"/>
        <p>Meeting Place/Ride:</p>
        <input className="posts" type="text"/>
        <p>Date:</p>
        <input className="posts" type="date"/>
        <p>Time:</p>
        <input className="posts" type="time"/>
        <p>Number of Kids:</p>
        <input className="posts" type="number"/>
        <div className="buttons">
        <button className="normal">Add</button>
        </div>
    </Form>
</RequestStyle>
    )
}
export default PostRequest;