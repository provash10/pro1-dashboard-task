import React from 'react';
import { FiCheckSquare, FiPlus, FiUpload } from 'react-icons/fi';
import { Link } from 'react-router';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { IoSettings } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';

const Dashboard = () => {
    return (
        <div>
            <div className='border border-0'>
                <DashboardNavbar></DashboardNavbar>
            </div>

            <div className='flex min-h-screen  bg-slate-900 border-b border-slate-800'>
                {/* sidebar */}
                <aside className='flex flex-col justify-between w-64 text-white text-xl  bg-slate-900 border-r border-slate-800'>
                    <div>
                        <h1 className="text-xl font-bold p-2 border-b border-slate-800">Task Manager</h1>

                        <Link to="/dashboard" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                            <MdDashboard/> Dashboard
                        </Link>
                        <Link to="/tasks" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                            <FaTasks /> Tasks
                        </Link>
                        <Link to="/teams" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                            <RiTeamFill /> Teams
                        </Link>
                        <Link to="/settings" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                            <IoSettings /> Settings
                        </Link>


                    </div>
                    <div>
                        <Link to="/logout" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                            <IoMdLogOut /> Logout
                        </Link>
                    </div>
                </aside>

                {/* main*/}
              <div className='flex-1 flex flex-col'>
                {/* header */}
                <div className='flex justify-between items-center px-4 border-b border-slate-800 '>
                    <h1 className='text-xl text-white font-bold p-2'>Dashboard</h1>
                    <div className='flex justify-between items-center gap-4'>
                        <button className='flex justify-between items-center gap-2 text-xl font-semibold text-white px-4 py-1 rounded-lg  bg-slate-800 hover:bg-slate-700 border border-slate-700'>
                            <FiPlus/> Add Tasks
                        </button>
                        <button className='flex justify-between items-center gap-2  text-xl font-semibold text-white px-4 py-1 rounded-lg  bg-slate-800 hover:bg-slate-700 border border-slate-700'>
                            <FiUpload/> Import Task
                        </button>
                        
                    </div>
                </div>
                {/* main part */}
              </div>

            </div>
        </div>
    );
};

export default Dashboard;