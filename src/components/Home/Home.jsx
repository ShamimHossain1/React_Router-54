import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='loading'>{navigation.state === 'loading' && 'please wait'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;