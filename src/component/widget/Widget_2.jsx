import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget_2 = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Leave Balance</span>
        <span className="counter"  style={{ color: "orange" }}>20 Days</span>
        <span className="link">See Calendar</span>
      </div>
      <div className="right">
        <div className="number"></div>
        <EditCalendarOutlinedIcon className="icon"  style={{ color: "#eee" }} />
      </div>
    </div>
  );
};

export default Widget_2;
