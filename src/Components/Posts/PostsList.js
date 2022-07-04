import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import PostCard from './PostCard';
import Forms from '../Form/Forms';
import "./PostsList.css"

const PostsList = () => {
    const [postsList, setPostsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = () => {
        setLoading(true);

        axios.get(url).then(response => {
            if(response.status === 200) {
                setPostsList(response.data);
                setLoading(false);
            }
        })
    }

    const onAdd = (title, body) => {
        const params = {
            title,
            body,
            userId: 1
        };
        
        axios.post(url, params).then(response => {

            if(response.status === 201) {
               loadPosts();
            };
            console.log(response);
        });

        console.log("params", title, body);
    }

    return (
        <div className='postlist-wrapper'>
            <Forms onAdd={onAdd} loading={loading}/>

            {loading && <div>LOADING.....</div>}

            {!loading && postsList.map(post =>  <PostCard  post={post} key={post.id}/> )}
        </div>
    );
};

export default PostsList;