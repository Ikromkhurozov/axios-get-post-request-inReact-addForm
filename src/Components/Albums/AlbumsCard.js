import React from "react";

import "./Albums.css";

const AlbumsCard = ({album}) => {
    return (
        <div>
            <div className="albums-container" key={album.id}>
                <div>{album.title}</div>
            </div>
        </div>
    );
};

export default AlbumsCard;
