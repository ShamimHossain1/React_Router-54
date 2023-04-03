import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const friend = useLoaderData();
    const {email, name, id, phone}=friend;
    return (
        <div className='friend1'>
            <h2>Everything about this person is here</h2>
            <p>{name}</p>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default FriendDetails;