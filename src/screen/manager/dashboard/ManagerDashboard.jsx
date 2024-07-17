import "./dashboard.scss";
import ManagerSidebar from '../../../component/manager/sidebar/ManagerSideBar';
import Navbar from "../../../component/navbar/Navbar";
import Widget from "../../../component/widget/Widget";

const ManagerDashboard = () => {
  return (
    <div className="dashboard">
      <ManagerSidebar />
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

export default ManagerDashboard;
