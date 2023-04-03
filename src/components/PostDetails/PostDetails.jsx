import React from 'react';
import './PostDetails.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const data = useLoaderData();
    const {userId, body, title, id}=data

    const navigate = useNavigate();
    const handleBack=()=>{
        navigate(-1);
    }

    return (
        <div className='postDetails'>
            <h1>{title}</h1>
            <h4>ID: {id}</h4>
            <h4>User ID: {userId}</h4>
            <p>{body}</p>
            <button onClick={handleBack}>Back</button>

            
        </div>
    );
};

export default PostDetails;