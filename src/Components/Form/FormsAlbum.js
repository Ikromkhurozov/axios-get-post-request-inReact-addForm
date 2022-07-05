import React, {useState} from 'react';
import "./Forms.css";

const FormsAlbum = ({onAdd, loading}) => {
    const [title, setTitle] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title){
            return;
        }

        onAdd(title);

        setTitle('');
    }

    return (
        <div className='form-container'>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" className='form-title' placeholder='Title:'/>
            <button onClick={onSubmit} className="submit-btn" disabled={loading}>Submit</button>
        </div>
    );
};

export default FormsAlbum;