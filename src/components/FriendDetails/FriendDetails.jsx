import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {

    const navigate = useNavigate();
    const handleBack=()=>{
        navigate(-1);
    }
    const friend = useLoaderData();
    const {email, name, id, phone}=friend;
    return (
        <div className='friend1'>
            <h2>Everything about this person is here</h2>
            <p>{name}</p>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default FriendDetails;