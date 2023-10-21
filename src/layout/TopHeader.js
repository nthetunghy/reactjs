import React from "react";

const TopHeader = () => {
    return <div className="all_room">
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
    </div>
  </div>
}

export default TopHeader;



