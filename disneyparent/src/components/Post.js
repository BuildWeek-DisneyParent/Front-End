import React from 'react';
import {PostStyle} from "./Styling/PostStyling"

const Post = props => {
    return (
        <PostStyle className="Post">
            <h3>Title: {props.post.title}</h3>
            <p>Attraction: {props.post.attraction}</p>
            <p># of Children: {props.post.children}</p>
        </PostStyle>
    );
};

export default Post;