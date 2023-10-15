import React from "react";
import {BiLeftArrow} from "react-icons/bi"
const Header = () => {
    return <div>
        <div className="header_container">
            <div className="header_content">
                <div className="header_content_name">
                    <ul>
                        <li><img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" /></li>
                        <li>xin chao</li>
                        <li><BiLeftArrow/></li>
                    </ul>
                </div>
                <span></span>
                <div className="header_content_route">
                    <ul>
                        <li>Tổng quan</li>
                        <li>Quản lý thuê trả phòng</li>
                        <li>Quản lý dịch vụ</li>
                        <li>Quả lý khách hàng</li>
                        <li>Quản lý phòng</li>
                        <li>Quản lý tiện nghi</li>

                        
                    </ul>
                </div>
                <div className="header_content_logout">
                    <a >Dang Xuat</a>
                </div>
            </div>
        </div>
    </div>
}
export default Header;