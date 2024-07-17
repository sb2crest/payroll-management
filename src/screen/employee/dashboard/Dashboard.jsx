// import React from 'react'
import "./dashboard.scss";
import Sidebar from "../../../component/sidebar/Sidebar";
import Navbar from "../../../component/navbar/Navbar";
import Widget from "../../../component/widget/Widget";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
