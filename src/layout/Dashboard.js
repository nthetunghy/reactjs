import React from "react";
import Header from "./Header";
import AllRoom from "./AllRoom";
import TopHeader from "./TopHeader"

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="dashboard">
        <div> <Header /></div>
        <div>
          <TopHeader />
          <AllRoom />
          {/* <div><button className="dashboard_bt">Thêm Phòng</button></div> */}
        </div>
      </div>

    </>
  );
};

export default Dashboard;
