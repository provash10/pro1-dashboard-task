import React from 'react';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

const DashboardNavbar = () => {
    return (
        <div className='flex items-center justify-between gap-25 bg-slate-900 border-b border-slate-800 px-6 py-3'>
            <h1 className='text-xl font-bold text-white'>
                Dashboard Logo
            </h1>

            {/* search box */}
            <div className='flex-1'>
                <div className='relative'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'></FiSearch>
                    <input type="text"
                        placeholder='Search Tasks...'
                        className='w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none transition ' />
                </div>
            </div>

            <div className='flex justify-between gap-4 items-center'>
                <button className='p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition'>
                    <FiBell className='text-lg text-white'></FiBell>
                </button>
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg text-sm">
                    <FiUser  className='text-lg text-white'/>
                    <span className='text-white font-bold'>Provash</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;