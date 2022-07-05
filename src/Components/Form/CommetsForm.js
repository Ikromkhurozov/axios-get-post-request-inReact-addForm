import React, {useState} from 'react';
import "./Forms.css";

const CommentsForm = ({onAdd, loading}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody]  = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !body){
            return;
        }

        onAdd(name, email, body);

        setName('');
        setEmail('');
        setBody('');

    }

    return (
        <div className='form-container'>
            <input onChange={e => setName(e.target.value)} value={name} type="text" className='form-title' placeholder='Name:'/>
            <input onChange={e => setEmail(e.target.value)} value={email} type="text" className='form-title' placeholder='Email:'/>
            <input onChange={e => setBody(e.target.value)} value={body} type="text" className='form-body' placeholder='Body:'/>
            <button onClick={onSubmit} className="submit-btn" disabled={loading}>Submit</button>
        </div>
    );
};

export default CommentsForm;