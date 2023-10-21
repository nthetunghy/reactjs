import React from "react";
import Header from "../layout/Header";

const Convenient = () => {
    const arr = ['STT', 'Mã tiện nghi', 'Tên tiện nghi', 'Tình trạng', 'Số lượng', ""]

    const arr1 = [
        {
            matn: "TN001",
            name: 'Giường đơn',
            tt: 'Tốt',
            sl: '5',
        },
        {
            matn: "TN002",
            name: 'Giường đôi',
            tt: 'Tốt',
            sl: '5',
        }, {
            matn: "TN003",
            name: 'Tivi',
            tt: 'Tốt',
            sl: '5',
        }, {
            matn: "TN004",
            name: 'Điều hoà',
            tt: 'Tốt',
            sl: '5',
        },
        {
            matn: "TN005",
            name: 'Tủ lạnh',
            tt: 'Tốt',
            sl: '5',
        },
    ];


    return <div className="dashboard">
        <div className="convenient_container">
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
                                    <td>{data.matn}</td>
                                    <td>{data.name}</td>
                                    <td>{data.tt}</td>
                                    <td>{data.sl}</td>
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
                    <button className="button_them">Thêm Tiện Nghi</button>
                </div>
            </div>
        </div>

    </div>
}

export default Convenient;