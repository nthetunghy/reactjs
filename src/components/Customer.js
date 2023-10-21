import React from "react";
import Header from "../layout/Header";

const Customer = () => {
    const arr = ['STT', 'Mã khách hàng', 'Họ Tên', 'Số CCCD/Hộ Chiếu', 'SĐT', 'Quốc tịch', 'Địa chỉ', ""]

    const arr1 = [
        {
            makh: "KH001",
            name: 'Nguyễn Văn A',
            cccd: '03321543515',
            sdt: '0984232325',
            qt: 'Việt nam',
            address: "Cầu giấy,Hà Nội"
        },
        {
            makh: "KH002",
            name: 'Nguyễn Văn B',
            cccd: '03321543515',
            sdt: '0984232325',
            qt: 'Việt nam',
            address: "Cầu giấy,Hà Nội"
        },
        {
            makh: "KH003",
            name: 'Nguyễn Văn C',
            cccd: '03321543515',
            sdt: '0984232325',
            qt: 'Việt nam',
            address: "Cầu giấy,Hà Nội"
        },
        {
            makh: "KH004",
            name: 'Nguyễn Văn D',
            cccd: '03321543515',
            sdt: '0984232325',
            qt: 'Việt nam',
            address: "Cầu giấy,Hà Nội"
        },
        {
            makh: "KH005",
            name: 'Nguyễn Văn E',
            cccd: '03321543515',
            sdt: '0984232325',
            qt: 'Việt nam',
            address: "Cầu giấy,Hà Nội"
        },

    ];

    return <div className="dashboard">
        <div className="customer_container">
            <Header />
            <div className="customer_list">
                <div>Danh sách khách hàng</div>
                <table class="table table-dark ">
                    <thead>
                        <tr>
                            {
                                arr.map((value, index) => {
                                    return <th key={index}>{value}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr1.map((data, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.makh}</td>
                                    <td>{data.name}</td>
                                    <td>{data.cccd}</td>
                                    <td>{data.sdt}</td>
                                    <td>{data.qt}</td>
                                    <td>{data.address}</td>
                                    <td>
                                        <button className="btn_button">Chỉnh sửa</button>
                                        <button className="btn_button">Xóa</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
                <div>
                    <button className="button_them">Thêm Khách Hàng mới</button>
                </div>
            </div>
        </div>
    </div>
};

export default Customer;