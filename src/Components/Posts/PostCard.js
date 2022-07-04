import React from 'react';

import "./PostCard.css";

const PostCard = ({post}) => {
    return (
        <div className="card-container" key={post.id}>
            <h5 className="post-title">{post.title}</h5>
            <div>{post.body}</div>
        </div>
    );
};

export default PostCard;