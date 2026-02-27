import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-16'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;