import React from "react";
import {Form} from "formik"
import {RequestStyle} from "./Styling/RequestStyling"

const PostRequest= () => {
    return (
<RequestStyle className="mainstyle">
    <Form>
        <h4>Create a new Post Request</h4>
        <p>Name:</p>
        <input className="posts" type="text"/>
        <p>Meeting Place/Ride:</p>
        <input className="posts" type="text"/>
        <p>Time:</p>
        <input className="posts" type="text"/>
        <p>Number of Kids:</p>
        <input className="posts" type="text"/>
        <button className="normal">Add</button>
        <button className="red">Delete</button>
    </Form>
</RequestStyle>
    )
}
export default PostRequest;