import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './post.css';
import Post from '../Post/Post';

const Posts = () => {
    const datas = useLoaderData();
    console.log(datas)
    return (
        <div>
            <h1 className='postHere'>Here is total {datas.length} Post</h1>
            <div className='posts'>
                {
                    datas.map(data=> <Post
                    key={data.id}
                    data={data}
                    ></Post> )
                }
            </div>

            
        </div>
    );
};

export default Posts;