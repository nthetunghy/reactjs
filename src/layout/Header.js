import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useLocation, useParams } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const param = useParams()

  // console.log(param.idRoom);

  const arr_header = [
    {
      title: "Quản lý phòng",
      path: "/dashboard"
    },
    {
      title: "Quản lý thuê, trả phòng",
      path: "/roomquanly"
    }
    , {
      title: "Quản lý dịch vụ",
      path: "/quanlydichvu"
    },
    {
      title: "Quản lý khách hàng",
      path: "/quanlykhachhang"
    },
    {
      title: "Quản lý tiện nghi",
      path: "/quanlytiennghi"
    }
  ]



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
              <li>Xin chào: Thế Tùng</li>
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

              {
                arr_header?.map((value, index) => {
                  return (
                    <li className={location.pathname === value.path ? "active_header" : ""} key={index} onClick={() => {
                      navigate(value.path)
                    }}>{value.title}</li>
                  )
                })
              }
              {/* <li>Tổng quan</li>
              <li>Quản lý thuê, trả phòng</li>
              <li>Quản lý dịch vụ</li>
              <li>Quản lý khách hàng</li>
              <li>Quản lý phòng</li>
              <li>Quản lý tiện nghi</li> */}
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
