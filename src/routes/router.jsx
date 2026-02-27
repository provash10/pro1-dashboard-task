import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
    }
])