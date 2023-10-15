import React from "react";

const CardRoom = ({ value }) => {
  return (
    <div>
      <div className="card_container">
        <div
          className="card_name"
          style={
            value?.status === 0
              ? { backgroundColor: "#007527" }
              : value?.status === 1
              ? { backgroundColor: "#bb0000" }
              : value?.status === 2
              ? { backgroundColor: "#9900bb" }
              : { backgroundColor: "#7e5a00" }
          }
        >
          <p>{value.roomNumber}</p>
        </div>
        <div className="card_details">
          <h6>Người thuê: {value?.nameCustomer}</h6>
          <span>Ngày: {value?.startTime?.split("-")[0]}</span>
          <div>
            <p>
              Thời gian thuê:{" "}
              {value?.endTime?.split("-")[0].split("/")[0] -
                value?.startTime?.split("-")[0].split("/")[0]}{" "}
              ngày
            </p>
            <p>Ngày kết thúc: {value?.endTime?.split("-")[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
