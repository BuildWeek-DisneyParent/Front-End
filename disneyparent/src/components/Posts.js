import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Post from './Post';

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
        <div className="Posts">
            <Navigation />
            {posts.map(post => (
                <Post post={post} />
        ))}
            <Footer />
        </div>
    );
};

export default Posts;