import "./timesheet.scss";
import ManagerSidebar from "../../../component/manager/sidebar/ManagerSideBar";
import ManagerNavBar from "../../../component/manager/navbar/ManagerNavBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

const AddTimeSheet = () => {
  const [employees, setEmployees] = useState([]);

  const fetchTimeSheet = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/payrollManager/findAllEmployeesByMangerUniqueID?managerUniqueId=MGR2`
      );
      const data = response.data;
      console.log(data);
      setEmployees(data);
      console.log("Response:", employees);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTimeSheet();
  }, []);

  return (
    <div className="add-timesheet">
      <ManagerSidebar />
      <div className="add-timesheet-container">
        <ManagerNavBar />
        <div className="top">
          <div className="search-container">
            <input
              type="text"
              className="search-text-box"
              placeholder="From Date"
            />
            <input
              type="text"
              className="search-text-box"
              placeholder="To Date"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="center">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Employee ID</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Working Days</TableCell>
                  <TableCell align="right">Payment Mode</TableCell>
                  <TableCell align="right">Default Hours</TableCell>
                  <TableCell align="right">Over Time Hours</TableCell>
                  <TableCell align="center">Total Hours</TableCell>
                  <TableCell align="center">Approval</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.employeeUniqueId}>
                    <TableCell component="th" scope="row">
                      {employee.employeeUniqueId}
                    </TableCell>
                    <TableCell align="right"> {employee.firstName}</TableCell>
                    <TableCell align="right"> {employee.lastName}</TableCell>
                    <TableCell align="right"> {employee.workingDays}</TableCell>
                    <TableCell align="right"> {employee.paymentMode}</TableCell>
                    <TableCell align="right">
                      {" "}
                      {employee.assignedHours}
                    </TableCell>
                    <TableCell align="right">
                      {employee.overTimeWorkingHours}
                    </TableCell>
                    <TableCell align="center">
                      {employee.totalWorkingHours}
                    </TableCell>
                    <TableCell align="center">
                      <button className="approve-button">Approve</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AddTimeSheet;
