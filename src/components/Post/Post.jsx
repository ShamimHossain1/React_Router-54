import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({data}) => {
    const {userId, id, title, body}=data
     const navigate = useNavigate();
    const handleDetails = () =>{
          navigate(`/post/${id}`)
    }
    return (
        <div className='post'>

            <h1>{title}</h1>
            <p>{body}</p>
            <p>{userId}</p>
            <Link className='details' to={`/post/${id}`}> Post details</Link>
            <button onClick={handleDetails}>Details</button>


            
        </div>
    );
};

export default Post;