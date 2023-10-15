import { Navigate,Outlet } from "react-router-dom";

const Public = ()=>{
    const token = localStorage.getItem("token")
    return !token ?
};
export default Public;