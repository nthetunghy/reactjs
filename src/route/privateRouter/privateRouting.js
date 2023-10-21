import Dashboard from "../../layout/Dashboard";
import RoomManagement from "../../components/RoomManagement";
import Service from "../../components/Service";
import Customer from "../../components/Customer";
import Convenient from "../../components/Convenient";
const PrivateRouting = [
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  // {
  //   path: "/dashboard/:idRoom",
  //   Component: Dashboard,
  // },
  {
    path: "/roomquanly",
    Component: RoomManagement,
  },
  {
    path: "/quanlydichvu",
    Component: Service,
  },
  {
    path: "/quanlykhachhang",
    Component: Customer,
  },
  {
    path: "/quanlytiennghi",
    Component: Convenient,
  },
];

export default PrivateRouting;
