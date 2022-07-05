import React from 'react';

import "./CardInfo.css";

function CardInfo() {
    return (
        <div className='card-container' key={CardInfo.id}>
            {
                CardInfo.post && <div>{CardInfo.title}</div>; <div>{CardInfo.body}</div>
            }


        </div>
    )
}

export default CardInfo;



const PostCard = ({post}) => {
    return (
        <div className="card-container" key={post.id}>
            {post.comment &&  <div>{post.comment}</div>}
            {post.title &&  <h5 className="post-title">{post.title}</h5>}
            {post.body && <div>{post.body}</div>}
        </div>
    );
};

