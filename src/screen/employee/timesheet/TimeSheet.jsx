import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import "./timesheet.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Info from "../info/Info";

const TimeSheet = () => {
  const [weeklySummary, setWeeklySummary] = useState({});
  const [employeeWorkHours, setEmployeeWorkHours] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [renderInfo, setRenderInfo] = useState(false);
  const [propData, setPropData] = useState({});

  const fetchReportData = async () => {
    const requestBody = {
      managerUniqueId: "MGR1",
      employeeUniqueId: "EMP002",
      startDate: startDate,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/payrollManager/weekly-report",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      setPropData(data);
      console.log("Response Data:", data);
      setWeeklySummary({
        weeklySubmissionId: data.weeklySubmissionId,
        weeklyCompanyTotalWorkingTime: data.weeklyCompanyTotalWorkingTime,
        weeklyEmployeeTotalWorkedTime: data.weeklyEmployeeTotalWorkedTime,
        weeklyEmployeeOverTimeHours: data.weeklyEmployeeOverTimeHours,
        weeklyEmployeeWorkingDays: data.weeklyEmployeeWorkingDays,
        startDate: data.startDate,
        endDate: data.endDate,
        paySchedule: data.paySchedule,
        payRate: data.payRate,
        reportStatus: data.reportStatus,
      });
      setEmployeeWorkHours(data.employeeWorkHours);
      console.log("Prop Data:", propData);
      console.log("weeklySummary:", weeklySummary);
      console.log("employeeWorkHours:", employeeWorkHours);
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log("Hitting Search");
    fetchReportData();
  };

  return (
    <div>
      {renderInfo ? (
        <Info weeklySummary={weeklySummary} />
      ) : (
        <div className="timesheet">
          <Sidebar />
          <div className="timesheet-container">
            <Navbar />
            <div className="data-table">
              <div className="top">
                <div className="search-container">
                  <input
                    type="text"
                    className="search-text-box"
                    placeholder="Search"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <button className="search-button" onClick={handleSearchClick}>
                    <SearchOutlinedIcon className="icon" />
                  </button>
                </div>
                <div className="schedule-rate-container">
                  <div className="status">
                    <span className="label">Report Status</span>
                    <Link
                      to="/info"
                      style={{ textDecoration: "none" }}
                      onClick={() => setRenderInfo(true)}
                    >
                      <span className="value">
                        {weeklySummary.reportStatus}
                      </span>
                    </Link>
                  </div>
                  <div className="worksheet-id">
                    <span className="label">WorkSheet ID</span>
                    <span className="value">
                      {weeklySummary.weeklySubmissionId}
                    </span>
                  </div>
                  <div className="schedule">
                    <span className="label">Pay Schedule</span>
                    <span className="value">{weeklySummary.paySchedule}</span>
                  </div>
                  <div className="days">
                    <span className="label">Working Days</span>
                    <span className="value">
                      {" "}
                      {weeklySummary.weeklyEmployeeWorkingDays}
                    </span>
                  </div>
                  <div className="rate">
                    <span className="label">Pay Rate</span>
                    <span className="value">{weeklySummary.payRate}</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Record ID</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Check-In</TableCell>
                        <TableCell align="right">Check-Out</TableCell>
                        <TableCell align="right">Default Hours</TableCell>
                        <TableCell align="right">Worked Hours</TableCell>
                        <TableCell align="right">Over Time</TableCell>
                        <TableCell align="right">Total Work Hours</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {employeeWorkHours.map((workHour) => (
                        <TableRow key={workHour.recordId}>
                          <TableCell component="th" scope="row">
                            {workHour.recordId}
                          </TableCell>
                          <TableCell align="right">{workHour.date}</TableCell>
                          <TableCell align="right">
                            {workHour.startTime}
                          </TableCell>
                          <TableCell align="right">
                            {workHour.endTime}
                          </TableCell>
                          <TableCell align="right">
                            {workHour.dailyCompanyWorkingHours}
                          </TableCell>
                          <TableCell align="right">
                            {workHour.dailyEmployedWorkedHours}
                          </TableCell>
                          <TableCell align="right">
                            {workHour.dayOvertimeHoursForEmployee}
                          </TableCell>
                          <TableCell align="right">
                            {workHour.dailyTotalHoursForEmployee}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSheet;
