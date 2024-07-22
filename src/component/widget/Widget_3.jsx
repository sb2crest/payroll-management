import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget_3 = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Attendance Progress</span>
        <span className="counter"  style={{ color: "green" }}>87%</span>
        <span className="link">See Previous Progress </span>
      </div>
      <div className="right">
        <div className="number"></div>
        <EditCalendarOutlinedIcon className="icon" style={{ color: "#eee" }} />
      </div>
    </div>
  );
};

export default Widget_3;
