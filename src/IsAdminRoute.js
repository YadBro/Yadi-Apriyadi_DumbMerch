import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "./context/User";

export default function IsAdminRoute(){
    let { user } = useContext(UserContext);
    user = JSON.parse(user);
    if(user?.isAdmin){
        return ( <Outlet />);
    }else{
        return (<Navigate to='/'/>)
    }
}