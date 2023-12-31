import React from "react";
import CardRoom from "../components/CardRoom";
import { MdKeyboardArrowRight } from "react-icons/md";

const AllRoom = () => {
  const arrRoom = [
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

  return (
    <div className="all_room">
      <div className="all_room_container">
        <div className="all_room_header">
          <ul>
            <li>
              <input type="text" placeholder="Tìm kiếm phòng..." />
              <a> Tìm kiếm</a>
            </li>
            <li>Tất cả</li>
            <li>Phòng trống</li>
            <li>Phòng đã thuê</li>
            <li>Phòng đã được đặt</li>
            <li>Phòng đang sửa chữa</li>
          </ul>
        </div>

        <div className="all_room_body">
          {arrRoom?.map((value, index) => {
            return <CardRoom value={value} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllRoom;
