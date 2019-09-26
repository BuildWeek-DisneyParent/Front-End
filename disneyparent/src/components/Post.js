import React from 'react';
import {PostStyle} from "./Styling/PostStyling"

const Post = props => {
    return (
        <PostStyle className="Post mainstyle">
            <h3>Title: {props.post.title}</h3>
            <p>Attraction: {props.post.attraction}</p>
            <p># of Children: {props.post.children}</p>
            <div className="second">
                    <button className="btn1">Accept</button>
                   <input type="text" placeholder="Ask a question.."/>
                   </div>
                   <button className="btn2">Add</button>
                   <button className="btn3">Delete</button>
                   </PostStyle>
        
    );
};

export default Post;