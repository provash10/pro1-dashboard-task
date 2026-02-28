import React from 'react';
import { FiCheckSquare, FiPlus, FiUpload } from 'react-icons/fi';
import { Link, Navigate, useNavigate } from 'react-router';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { IoSettings } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { toast } from 'react-toastify';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardData from '../components/Dashboard/DashboardData';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        // localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        toast.success("Logout Ok")
        navigate("/login")
    }
    return (
        <div>
            <div className='border border-0'>
                <DashboardNavbar></DashboardNavbar>
            </div>

            <div className='flex min-h-screen  bg-slate-900 border-b border-slate-800'>
                {/* sidebar */}
                <aside className='flex flex-col justify-between w-64 text-white text-xl  bg-slate-900 border-r border-slate-800'>
                    <Sidebar></Sidebar>

                    <div>
                        <Link to="/login" onClick={handleLogout} className="flex items-center gap-3 text-xl font-bold m-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
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

                <div>
                    <DashboardData></DashboardData>
                </div>
              </div>

            </div>
        </div>
    );
};

export default Dashboard;