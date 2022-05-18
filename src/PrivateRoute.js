import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from "./context/AuthenticatedContext";

export default function PrivateRoute(){
    let { isLogin } = useContext(LoginContext);
    if(isLogin){
        return ( <Outlet />);
    }else{
        return (<Navigate to='/'/>)
    }
}