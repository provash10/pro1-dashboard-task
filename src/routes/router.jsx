import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:"login",
                element: <Login></Login>
            }
        ]
    },

    //dashboard layout
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                index: true,
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }
        ]
    }
])