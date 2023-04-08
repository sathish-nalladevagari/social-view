import {createBrowserRouter} from "react-router-dom"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import Layout from "../components/layout"
import User from "../components/users/index"
import Profile from "../components/profile/index"
import Dashboard from "../components/dashboard"
import Comments from "../components/comments/index"
import Home from "../components/Home"

export const ROOT = "/"
export const LOGIN = "/login" 
export const REGISTER = "/register" 
export const PROTECTED = "/protected"
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
    {path:ROOT , element:<Home/>},
    {path:LOGIN , element : <Login/>},
    {path:REGISTER , element : <Register/>},
    {path:PROTECTED,element:<Layout/>,
children:[
    {path:DASHBOARD,element:<Dashboard/>},
    {
        path: USERS,
        element: <User />,
      },
      {
        path: PROFILE,
        element: <Profile/>,
      },
      {
        path: COMMENTS,
        element:<Comments/>,
      },

]}
])