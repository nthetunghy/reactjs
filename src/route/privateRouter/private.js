import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={{ pathname: "/login" }} />;
};

export default Private;
