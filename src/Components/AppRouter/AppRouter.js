



import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from '../Nav/Nav'
import PostsList from '../Posts/PostsList';
import CommentsList from '../Comments/CommentsList';
import AlbumsList from '../Albums/AlbumsList';


function AppRouter() {
    return (
        <Router>
            <div>
                <Nav/>

            </div>
            <Routes>
                <Route path='/' element={<PostsList/>} ></Route>
                <Route path='comments' element={<CommentsList/>} ></Route>
                <Route path='albums' element={<AlbumsList/>} ></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;
