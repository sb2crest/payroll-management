// import React from 'react'
import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Pay Date</span>
        <span className="counter">12345</span>
        <span className="link">See  Pay Date</span>
      </div>
      <div className="right">
        <div className="number">123</div>
        <EditCalendarOutlinedIcon className="icon"/>
      </div>
    </div>
  );
};

export default Widget;
