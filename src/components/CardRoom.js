import React from "react";
const CardRoom = ({value}) =>{
    return <div>
        <div className="card_container">
            <div className="card_name" style={value.status === 0 ? {background:"#0ecf5e"} :value.status === 1 ? {background:"red"} :value.status === 2 ? {background:"purple"} :{background:"brown"}}><p>{value.roomNumber}</p></div>
            <div className="card_detail">
                <h6> Người Thuê: {value.nameCustomer}</h6>
                <span>Ngày thuê: {value.startTime.split("-")[0]}</span>
                <div>
                    <p>Thời gian thuê: {value.endTime.split("-")[0].split("/")[0] - value.startTime.split("-")[0].split("/")[0]} ngày</p>
                    <p>Ngày kết thúc: 15/10/2023</p>   
                </div>
            </div>
        </div>
    </div>
}
export default CardRoom;