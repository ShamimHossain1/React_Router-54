import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({data}) => {
    const {userId, id, title, body}=data
    return (
        <div className='post'>

            <h1>{title}</h1>
            <p>{body}</p>
            <p>{userId}</p>
            <Link className='details' to={`/post/${id}`}> Post details</Link>


            
        </div>
    );
};

export default Post;