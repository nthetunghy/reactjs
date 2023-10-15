import React from "react";
import {BiRightArrow} from "react-icons/bi"
import CardRoom from "../components/CardRoom";
const AllRoom = ()=>{
  const arrRoom = [
    {
      id: 1,
      roomNumber: "P.152",
      status: 1,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn aaaaaaaaaaaaaaaaaa",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },
    {
      id: 2,
      roomNumber: "P.152",
      status: 2,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn B",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },
    {
      id: 3,
      roomNumber: "P.152",
      status: 3,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },
    {
      id: 3,
      roomNumber: "P.152",
      status: 3,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },{
      id: 3,
      roomNumber: "P.152",
      status: 3,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },{
      id: 3,
      roomNumber: "P.152",
      status: 3,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },{
      id: 3,
      roomNumber: "P.152",
      status: 3,
      type:"Đơn",
      nameCustomer: "Nguyễn Văn C",
      startTime: "25/2/2023 - 15h15",
      endTime: "26/2/2023 - 15h15",
    },
  ]
  return  <div className="allroom">
    <div className="all_room_container">
        <div className="all_room_header">
            <ul>
                <li>
                    <input type="text" placeholder="tim kiem"/>
                    <a>tim kiem</a>
                </li>
                <li>Tat ca</li>
                <li>phong trong</li>
                <li>phong da thue</li>
                <li>phong da duoc dat</li>
                <li>dang sua chua</li>



            </ul>
        </div>
        <div className="all_room_body">
        {
          arrRoom?.map((value,index)=>{
            return <CardRoom value ={value} key={index}/>
          })
        }
        </div>
       
    </div>
  </div>
}
export default AllRoom;