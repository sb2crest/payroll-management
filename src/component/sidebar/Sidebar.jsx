import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LOGO</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <NavLink
            to="/employee-dashboard"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to="/timesheet" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentOutlinedIcon className="icon" />
              <span>Time Sheet</span>
            </li>
          </NavLink>
          <NavLink to="/edit-hours" style={{ textDecoration: "none" }}>
            <li>
              <WorkHistoryOutlinedIcon className="icon" />
              <span>Pay Hours</span>
            </li>
          </NavLink>
          <li title="In Progress">
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <hr style={{ marginRight: "20px" }} />
          <li title="In Progress">
            <HelpOutlineOutlinedIcon className="icon" />
            <span>Help Center</span>
          </li>
          <li title="In Progress">
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">notification</div> */}
    </div>
  );
};

export default Sidebar;
