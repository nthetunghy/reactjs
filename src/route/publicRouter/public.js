import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const token = localStorage.getItem("token");

  return !token ? <Outlet /> : <Navigate to={{ pathname: "/dashboard" }} />;
};

export default Public;
