import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="header_container">
        <div className="header_content">
          <div className="header_content_name">
            <ul>
              <li>
                <img
                  src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg"
                  alt=""
                />
              </li>
              <li>Xin chào: Tuấn Anh</li>
              <li
                style={{
                  fontSize: "24px",
                }}
              >
                <MdKeyboardArrowLeft />
              </li>
            </ul>
          </div>
          <span></span>
          <div className="header_content_route">
            <ul>
              <li>Tổng quan</li>
              <li>Quản lý thuê, trả phòng</li>
              <li>Quản lý dịch vụ</li>
              <li>Quản lý khách hàng</li>
              <li>Quản lý phòng</li>
              <li>Quản lý tiện nghi</li>
            </ul>
          </div>

          <div className="header_content_logout">
            <a>Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
