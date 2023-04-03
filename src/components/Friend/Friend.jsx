import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {email, name, id, phone}=props.friend;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <p> <Link to={`/friend/${id}`}> Show me details </Link></p>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Friend;