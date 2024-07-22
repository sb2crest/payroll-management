import "./add.scss";
import ManagerSidebar from "../../../component/manager/sidebar/ManagerSideBar";
import ManagerNavBar from "../../../component/manager/navbar/ManagerNavBar";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddConsignee = () => {
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [workingDays, setWorkingDays] = useState(0);
  const [workingHours, setWorkingHours] = useState(0);
  const [paymentDate, setPaymentDate] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    saveConsignee();
    clearData();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const saveConsignee = async () => {
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      designation: designation,
      paymentMode: paymentMode,
      dateOfJoining: dateOfJoining,
      workingDays: workingDays,
      workingHours: workingHours,
      paymentDate: paymentDate,
    };
    console.log("Request Body:", requestBody);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/data-details/addData`,
        requestBody
      );
      const data = response.data;
      console.log(data);
      setOpen(true);
    } catch (error) {
      console.error("Error in saving data: " + error);
    }
  };

  const clearData = () => {
    setFirstName(" ");
    setLastName(" ");
    setDateOfJoining(" ");
    setDesignation(" ");
    setPaymentDate(" ");
    setPaymentMode(" ");
    setWorkingDays(0);
    setWorkingHours(0);
  };

  return (
    <div className="add-consignee">
      <ManagerSidebar />
      <div className="add-consignee-container">
        <ManagerNavBar />
        <div className="content">
          <div className="form-container">
            <div className="form-data">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input
                  id="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className="form-data">
              <div>
                <label htmlFor="doj">Date of Joining</label>
                <input
                  id="doj"
                  placeholder="yyyy-mm-dd"
                  onChange={(e) => setDateOfJoining(e.target.value)}
                  value={dateOfJoining}
                />
              </div>
              <div>
                <label htmlFor="designation">Role</label>
                <input
                  id="designation"
                  onChange={(e) => setDesignation(e.target.value)}
                  value={designation}
                />
              </div>
            </div>
            <div className="form-data">
              <div>
                <label htmlFor="payment">Payment Mode</label>
                <input
                  id="payment"
                  onChange={(e) => setPaymentMode(e.target.value)}
                  value={paymentMode}
                />
              </div>
              <div>
                <label htmlFor="days">Working Days</label>
                <input
                  id="days"
                  onChange={(e) => setWorkingDays(e.target.value)}
                  value={workingDays}
                />
              </div>
            </div>
            <div className="form-data">
              <div>
                <label htmlFor="hours">Working Hours</label>
                <input
                  id="hours"
                  onChange={(e) => setWorkingHours(e.target.value)}
                  value={workingHours}
                />
              </div>
              <div>
                <label htmlFor="pay-date">Pay Date</label>
                <input
                  id="pay-date"
                  placeholder="yyyy-mm-dd"
                  onChange={(e) => setPaymentDate(e.target.value)}
                  value={paymentDate}
                />
              </div>
            </div>
            <div className="button">
              <button className="add" onClick={handleClick}>
                Add
              </button>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <SnackbarContent
                  sx={{
                    backgroundColor: "green",
                    color: "#fff",
                  }}
                  message="Consignee added successfully"
                />
              </Snackbar>
              <Link to="/manager-dashboard">
                <button className="cancel">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddConsignee;
