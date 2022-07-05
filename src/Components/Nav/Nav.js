import React from 'react';
import{ Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <div>
            <nav>
                <ul className='nav-ul'>
                    <li><Link className='nav-link' to="/">Posts</Link></li>
                    <li><Link className='nav-link'  state={{name: "name"}}  to="/comments">Comments</Link></li>
                    <li><Link className='nav-link' to="/albums">Albums</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;