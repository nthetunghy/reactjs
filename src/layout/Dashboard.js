import React from "react";
import Header from "./Header";
import AllRoom from "./AllRoom";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="dashboard">
        <Header />
        <AllRoom />
      </div>
    </>
  );
};

export default Dashboard;
