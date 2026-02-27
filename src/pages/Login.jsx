import React from 'react';

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
    }
    return (
        <div className='bg-slate-950 min-h-screen flex justify-center items-center'>
            <div className="border border-white bg-slate-800 text-center p-10 rounded-lg w-full max-w-md">
                <div className="card-body bg-slate-950 rounded-lg w-full">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label text-2xl text-white font-bold">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label text-2xl text-white font-bold">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover text-white">Forgot password?</a></div>
                            <button className="btn-custom text-2xl font-bold text-white">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 