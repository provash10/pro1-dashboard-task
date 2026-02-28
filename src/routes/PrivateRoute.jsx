import React from 'react';
import { Navigate} from 'react-router';

const PrivateRoute = ({children}) => {
    // const navigate=useNavigate();
    // const isLoggedIn =localStorage.getItem("isLoggedIn");
    
    // if(!isLoggedIn){
    //     return navigate("/login");
    // }
    const token =localStorage.getItem("token");
    
    if(!token){
        // return navigate("/login");
        return <Navigate to="/login" replace />
    }

    return children;
};

export default PrivateRoute;