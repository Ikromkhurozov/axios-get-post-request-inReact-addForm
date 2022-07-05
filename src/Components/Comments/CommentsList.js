import React, {useState} from 'react';
import CommentsCard from './CommentsCard';
import { useEffect } from 'react';
import axios from 'axios';
import "./Comments.css"
import CommentsForm from '../Form/CommetsForm';
import { useLocation } from 'react-router-dom';

const CommentsList = () => {
    const {pathname, state} = useLocation();
    const [commentsList, setCommentsList] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("location", pathname, state);

    useEffect(() => {
        loadComments();
    }, []);

    const url = "https://jsonplaceholder.typicode.com/comments";

    const loadComments = () => {
        setLoading(true);

        axios.get(url).then(response => {
            if(response.status === 200){
                setCommentsList(response.data);
                setLoading(false);
            }
            // console.log(response);
            
        })
    }

    const onAdd = (name, email, body) => {
        const params = {
            name,
            email,
            body,
            userId: 1
        };
        
        axios.post(url, params).then(response => {

            if(response.status === 201) {
               loadComments();
            };
            console.log(response);
        });

        console.log("params", name, email, body);
    }



    return (
        <div className='commentslist-wrapper'>
            <CommentsForm onAdd={onAdd} loading={loading}/>


            {loading && <div>LOADING.....</div>}


            {!loading && commentsList.map(comment => <CommentsCard comment={comment} key={comment.id}/>)}
        </div>
    )
};

export default CommentsList;