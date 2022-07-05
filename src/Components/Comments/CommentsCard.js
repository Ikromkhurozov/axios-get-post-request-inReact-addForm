import React from 'react';

import "./Comments.css";

const CommentsCard = ({comment}) => {
    return (
        <div className='comments-container' key={comment.id}>
            <h3 className='name-info'>{comment.name}</h3>
            <p className='email-info'>{comment.email}</p>
            <div>{comment.body}</div>
        </div>
    );
};

export default CommentsCard;