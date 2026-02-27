import React from 'react';
import { useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const navigate=useNavigate();
    const isLoggedIn =localStorage.getItem("isLoggedIn");
    
    if(!isLoggedIn){
        return navigate("/login");
    }
    return children;
};

export default PrivateRoute;