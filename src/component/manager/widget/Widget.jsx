// import React from 'react'
import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget = ({ title, counter, link }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span
          className="counter"
          style={{ color: "#018ffe", fontWeight: "400" }}
        >
          {counter}
        </span>
        <span className="link" style={{ cursor: "pointer" }}>
          {link}
        </span>
      </div>
      <div className="right">
        <div className="number"></div>
        <EditCalendarOutlinedIcon className="icon" style={{ color: "#eee" }} />
      </div>
    </div>
  );
};

export default Widget;
