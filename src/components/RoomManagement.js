import React from "react";
import Header from "../layout/Header";
import AllRoom from "../layout/AllRoom";
import CardRoom from "./CardRoom";
import TopHeader from "../layout/TopHeader";



const RoomManagement = () => {
  const arrRoomOne = [
    {
      id: 1,
      roomNumber: "P.294",
      status: 1,
      type: "Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "24/09/2023 - 08:45",
      endTime: "27/09/2023 - 08:45",
    },
    {
      id: 2,
      roomNumber: "P.294",
      status: 3,
      type: "Đơn",
      nameCustomer: "Nguyễn Văn Lúa",
      startTime: "25/09/2023 - 08:45",
      endTime: "27/09/2023 - 08:45",
    },
    {
      id: 3,
      roomNumber: "P.294",
      status: 2,
      type: "Đơn",
      nameCustomer: "Nguyễn Văn Trường Sinh",
      startTime: "25/09/2023 - 08:45",
      endTime: "27/09/2023 - 08:45",
    },
    {
      id: 4,
      roomNumber: "P.294",
      status: 0,
      type: "Đơn",
      nameCustomer: "Quách Tuấn Anh",
      startTime: "25/09/2023 - 08:45",
      endTime: "27/09/2023 - 08:45",
    },
    {
      id: 5,
      roomNumber: "P.294",
      status: 1,
      type: "Đơn",
      nameCustomer: "Nguyễn Thế Tùng",
      startTime: "21/09/2023 - 08:45",
      endTime: "27/09/2023 - 08:45",
    },
  ];
  return <div className="dashboard">
    <div className="room_management_container">
      <Header />
      <div className="management_list" style={{ width: "100%" }}>
        {/* <TopHeader/> */}
        <div className="management_feature">
          <div className="room_manage">
            <div className="room_manage_name">Quản lý phòng đang thuê</div>
            <div className="room_searh">
              <input type="text" placeholder="Tìm kiếm phòng" />
              <button>Tìm kiếm</button>
            </div>
            <div>{arrRoomOne.filter((data) => data.status === 1).map((value, index) => {
              return <CardRoom value={value} key={index} />;
            })}</div>
          </div>
          <div className="room_manage">
            <div className="room_manage_name">Phòng chưa cho thuê</div>
            <div className="room_searh">
              <input type="text" placeholder="Tìm kiếm phòng" />
              <button>Tìm kiếm</button>
            </div>
            <div>
              {arrRoomOne.filter((data) => data.status === 0).map((value, index) => {
                return <CardRoom value={value} key={index} />;
              })}
            </div>
          </div>
        </div>
        <button>Yêu cầu đặt phòng của khách hàng</button>
      </div>
    </div>
  </div>
}
export default RoomManagement;