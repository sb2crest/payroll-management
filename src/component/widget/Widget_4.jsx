import "./widget.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

const Widget_4 = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Ask Help</span>
        <span className="counter"  style={{ color: "blue" }}>FAQ</span>
        <span className="link">Recently Asked Question</span>
      </div>
      <div className="right">
        <div className="number"></div>
        <EditCalendarOutlinedIcon className="icon"  style={{ color: "#eee" }} />
      </div>
    </div>
  );
};

export default Widget_4;
