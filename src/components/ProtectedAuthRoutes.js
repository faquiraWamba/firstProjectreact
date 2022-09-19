import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedAuthRoutes = () => {
    if(localStorage.firstName){
        return <Navigate to = '/'/>
    }
    return (
        <>
            <Outlet/>
        </>
        
    );
}
 
export default ProtectedAuthRoutes;