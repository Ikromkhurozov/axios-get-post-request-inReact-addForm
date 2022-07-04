import React, {useState} from 'react';
import "./Forms.css";

const Forms = ({onAdd}) => {

    const [title, setTitle] = useState("");
    const [body, setBody]  = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        if(!title || !body){
            return;
        }

        onAdd(title, body);

        setTitle('');
        setBody('');

    }

    

    return (
        <div className='form-container'>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" className='form-title' placeholder='Title:'/>
            <input onChange={e => setBody(e.target.value)} value={body} type="text" className='form-body' placeholder='Body:'/>
            <button onClick={onSubmit} className="submit-btn">Submit</button>
        </div>
    );
};

export default Forms;