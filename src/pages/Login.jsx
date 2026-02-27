import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
    const [email,setEmail]= useState('user1@example.com');
    const [password,setPassword]= useState('password123');
    const navigate= useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if(!email || !password){
            toast.error("Please enter email and password");
            return;
        }
        if(email ==="user1@example.com" && password === "password123"){
            localStorage.setItem("isLoggedIn","true");
            toast.success("Login Successfull");
            setTimeout(()=>{
                navigate("/dashboard");
            },1000);
        }
        else{
            toast.error("Invalid Credentials");
        }
        
    }

    return (
        <div className='bg-slate-900  border-b border-slate-800 min-h-screen flex justify-center items-center'>
            <div className="border border-slate-600 bg-slate-800 text-center p-5 rounded-lg w-full max-w-md">
                <div className="card-body bg-slate-950 rounded-lg w-full">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label text-2xl text-white font-bold">Email</label>
                            <input type="email" name="email" className="input w-full" placeholder="Email" 
                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {/* password */}
                            <label className="label text-2xl text-white font-bold">Password</label>
                            <input type="password" name="password" className="input w-full" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <div><a className="link link-hover text-white">Forgot password?</a></div>

                            <button className="text-2xl font-bold text-white px-4 py-2 bg-slate-800 hover:bg-slate-700 transition ">Login</button>
                        </fieldset>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500">
                            Don't have an account?{' '}
                            <span className="text-primary-400 hover:underline cursor-pointer font-medium">
                                Request access
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 