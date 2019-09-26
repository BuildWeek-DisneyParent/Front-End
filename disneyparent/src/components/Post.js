import React from 'react';

const Post = props => {
    return (
        <div className="Post">
            <h3>Title: {props.post.title}</h3>
            <p>Attraction: {props.post.attraction}</p>
            <p># of Children: {props.post.children}</p>
        </div>
    );
};

export default Post;