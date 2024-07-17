import "./hours.scss";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import { Link } from "react-router-dom";

const EditHours = () => {
  return (
    <div className="edit-hours">
      <Sidebar />
      <div className="edit-hours-container">
        <Navbar />
        <div className="content">
          <div className="form-container">
            <div className="form-data">
              <label htmlFor="pay-date">Pay Date</label>
              <input id="pay-date" />
            </div>
            <div className="form-data">
              <label htmlFor="start-time">Start Time</label>
              <input id="start-time" />
            </div>
            <div className="form-data">
              <label htmlFor="end-time">End Time</label>
              <input id="end-time" />
            </div>
            <div className="form-data">
              <label htmlFor="default-hours">Default Working Hours</label>
              <input id="default-hours" />
            </div>
            <div className="button">
              <button>Submit</button>
              <Link to="/employee-dashboard" style={{ textDecoration: "none" }}>
                <button>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHours;
