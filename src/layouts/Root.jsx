import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;