import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import Footer from './Footer';
import Post from './Post';
import {PostsStyle} from "./Styling/PostStyling"

import axios from 'axios';

const Posts = props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://disneyparent-backend.herokuapp.com/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
        <Navigation />
        <Navigation2 />
        <PostsStyle className="Posts">
            {posts.map(post => (
                <Post post={post} />
        ))}
            <Footer />
        </PostsStyle>
        </div>
    );
};

export default Posts;