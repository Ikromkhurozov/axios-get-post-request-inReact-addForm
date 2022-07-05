import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FormsAlbum from "../Form/FormsAlbum";

import AlbumsCard from "./AlbumsCard";
import "./Albums.css";

const AlbumsList = () => {
    const [albumsList, setAlbumsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://jsonplaceholder.typicode.com/albums";

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = () => {
        setLoading(true);

        axios.get(url).then((response) => {
            if (response.status === 200) {
                setAlbumsList(response.data);
                setLoading(false);
            }
        // console.log(response);
        });
    };

  const onAdd = (title) => {
        const params = {
            title,
            userId: 1,
        };

        axios.post(url, params).then((response) => {
            if (response.status === 201) {
                loadAlbums();
            }
            // console.log(response);
        });
        console.log("params", title);
    };

    return (
        <div className="albumslist-wrapper">    

            <FormsAlbum onAdd={onAdd} loading={loading} />
            
            {loading && <div>Loading....!</div>}

            {!loading && albumsList.map(album => <AlbumsCard album={album} key={album.id} />)}

        </div>
    );
};

export default AlbumsList;
