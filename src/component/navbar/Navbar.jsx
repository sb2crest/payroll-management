// import React from 'react'
import "./navbar.scss";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <p>
          Welcome Back , <span> Employee !</span>
        </p>
      </div>
      <div className="center">
        <div className="search-container">
          <input type="text" className="search-text-box" placeholder="Search" />
          <button className="search-button">
            <SearchOutlinedIcon className="icons" />
          </button>
        </div>
      </div>
      <div className="right">
        <AccountCircleRoundedIcon className="icon" />
        <DarkModeRoundedIcon className="icon" />
        <NotificationsNoneRoundedIcon className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
