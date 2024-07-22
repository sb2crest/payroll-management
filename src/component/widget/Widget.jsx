// import React from 'react'
import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Pay Date</span>
        <span className="counter" style={{ color: "darkblue" }}>
          1 August 2024
        </span>
        <span className="link">See All Pay Date</span>
      </div>
      <div className="right">
        <div className="number"></div>
        <EditCalendarOutlinedIcon className="icon" style={{ color: "#eee" }} />
      </div>
    </div>
  );
};

export default Widget;
