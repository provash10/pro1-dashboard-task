import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
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
    );
};

export default Sidebar;