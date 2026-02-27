import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Link } from 'react-router';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';

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

                        <Link to="/dashboard" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-800 transition">
                            <FiCheckSquare /> Dashboard
                        </Link>
                        <Link to="/tasks" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-800 transition">
                            <FiCheckSquare /> Tasks
                        </Link>
                        <Link to="/tasks" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-800 transition">
                            <FiCheckSquare /> Settings
                        </Link>


                    </div>
                    <div>
                        <Link to="/tasks" className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-800 transition">
                            <FiCheckSquare /> Logout
                        </Link>
                    </div>
                </aside>

                {/* main*/}
              <div className='flex-1 flex flex-col'>
                {/* header */}
                <div className='flex justify-between items-center border-b border-slate-800'>
                    <h1 className='text-xl text-white font-bold p-2'>Dashboard</h1>
                    <div className='flex justify-between items-center gap-4'>
                        <h1>Add Tasks</h1>
                        <h1>import Tasks</h1>
                    </div>
                </div>
                {/* main part */}
              </div>

            </div>
        </div>
    );
};

export default Dashboard;