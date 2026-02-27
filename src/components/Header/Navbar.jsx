import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between gap-4 text-white font-bold px-4 py-2 bg-slate-950'>
            <Link to='/' className="btn-custom">Home</Link>
            <Link to='/login' className="btn-custom">Login</Link>
        </div>
    );
};

export default Navbar;