import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from "./context/AuthenticatedContext";
import { UserContext } from "./context/User";

export default function PrivateRoute(){
    let { isLogin } = useContext(LoginContext);
    let { user } = useContext(UserContext);
    if(isLogin){
        user = JSON.parse(user);
        return ( user?.isAdmin ? <Outlet /> : <Navigate to='/login'/>);
    }else{
        return (<Navigate to='/'/>)
    }
}