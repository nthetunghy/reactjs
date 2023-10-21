import React from "react";
import Header from "../layout/Header";


const Service = () => {
    const arr = ['STT', 'Mã dịch vụ', 'Tên dịch vụ', 'Giá tiền', 'Trạng thái', ""]

    const arr1 = [
        {
            madh: "DV001",
            name: 'ăn cơm tại nhà hàng',
            status: 'hoạt động',
            coin: 500,
        },
        {
            madh: "DV002",
            name: 'đặt vé tập yoga',
            status: 'hoạt động',
            coin: 500,
        },
        {
            madh: "DV003",
            name: 'giặt quần áo và thu dọn phòng',
            status: 'hoạt động',
            coin: 500,
        },
        {
            madh: "DV004",
            name: 'hát ru khi ngủ =))))))))',
            status: 'hoạt động',
            coin: 500,
        },
        {
            madh: "DV005",
            name: 'ăn cơm tại nhà hàng',
            status: 'hoạt động',
            coin: 500,
        },
    ];

    return <div className="dashboard">
        <div className="service_container">
            <Header />
            <div className="service_list" >
                <div>Bảng dịch vụ</div>
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
                                    <td>{data.madh}</td>
                                    <td>{data.name}</td>
                                    <td>{data.coin}</td>
                                    <td>{data.status}</td>
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
                    <button className="button_them">Thêm dịch vụ</button>
                </div>
                <div>
                    <button className="button_them">Yêu cầu dịch vụ của khách hàng</button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
}
export default Service;