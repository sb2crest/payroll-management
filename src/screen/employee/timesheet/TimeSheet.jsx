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
import { useEffect, useState } from "react";

const TimeSheet = () => {
  const [renderInfo, setRenderInfo] = useState(false);
  const [paySchedule, setPaySecdule] = useState("");
  const [rate, setRate] = useState("");
  const [weeklyWorkReports, setWeeklyWorkReports] = useState([]);
  const [dailyWorkReports, setDailyWorkReports] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [workSheetId, setWorkSheetId] = useState(0);
  const [defaultHours, setDefaultHours] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [over_time, setOver_time] = useState(0);
  const [status, setStatus] = useState("");

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/payrollManager/getEmployeeByUniqueId/EMP001`
      );
      const data = response.data;
      console.log("Employee Data:", data);
      setPaySecdule(data.weeklyWorkReports[0].paySchedule);
      setRate(data.weeklyWorkReports[0].payRate);
      setStatus(data.weeklyWorkReports[0].reportStatus);
      setWorkSheetId(data.weeklyWorkReports[0].weeklySubmissionId);
      setDefaultHours(data.weeklyWorkReports[0].weeklyCompanyTotalWorkingTime);
      setTotalHours(data.weeklyWorkReports[0].weeklyEmployeeTotalWorkedTime);
      setOver_time(data.weeklyWorkReports[0].weeklyEmployeeOverTimeHours);
      setStartDate(data.weeklyWorkReports[0].startDate);
      setEndDate(data.weeklyWorkReports[0].endDate);
      setWeeklyWorkReports(data.weeklyWorkReports);
      setDailyWorkReports(data.employeeWorkHours || []);
      console.log("Daily Work Reports:", dailyWorkReports);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <div>
      {renderInfo ? (
        <div className="info">
          <Sidebar />
          <div className="info-container">
            <Navbar />
            <div className="content-container">
              <div className="edit-print-button">
                {(status === "REJECTED" ||
                  status === "PENDING" ||
                  status === "DRAFT") && (
                  <Link to="/edit-hours" style={{ textDecoration: "none" }}>
                    <button className="button">Edit</button>
                  </Link>
                )}
                <button className="button">Print</button>
              </div>
              <div className="top">
                <div className="data">
                  <span className="label">Status</span>
                  <span className="value">{status}</span>
                </div>
                <div className="data">
                  <span className="label">Start Date</span>
                  <span className="value">{startDate}</span>
                </div>
                <div className="data">
                  <span className="label">End Date</span>
                  <span className="value">{endDate}</span>
                </div>
                <div className="data">
                  <span className="label">ID</span>
                  <span className="value">{workSheetId}</span>
                </div>
                <div className="data">
                  <span className="label">Default Hours</span>
                  <span className="value">{defaultHours} Hours</span>
                </div>
                <div className="data">
                  <span className="label">Over Time</span>
                  <span className="value">{over_time} Hours</span>
                </div>
                <div className="data">
                  <span className="label">Total Hours</span>
                  <span className="value">{totalHours} Hours</span>
                </div>
              </div>
              <div className="center">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Record ID</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Start Time</TableCell>
                        <TableCell align="right">End Time</TableCell>
                        <TableCell align="right">Default Hours</TableCell>
                        <TableCell align="right">Worked Hours</TableCell>
                        <TableCell align="right">Over Time</TableCell>
                        <TableCell align="right">Total Hours</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dailyWorkReports.map((daily) => (
                        <TableRow key={daily.recordId}>
                          <TableCell component="th" scope="row">
                            {daily.recordId}
                          </TableCell>
                          <TableCell align="right">{daily.date}</TableCell>
                          <TableCell align="right">{daily.startTime}</TableCell>
                          <TableCell align="right">{daily.endTime}</TableCell>
                          <TableCell align="right">
                            {daily.dailyCompanyWorkingHours}
                          </TableCell>
                          <TableCell align="right">
                            {daily.dailyEmployedWorkedHours}
                          </TableCell>
                          <TableCell align="right">
                            {daily.dayOvertimeHoursForEmployee}
                          </TableCell>
                          <TableCell align="right">
                            {daily.dailyTotalHoursForEmployee}
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
                  />
                  <button className="search-button">
                    <SearchOutlinedIcon className="icon" />
                  </button>
                </div>
                <div className="schedule-rate-container">
                  <div className="schedule">
                    <span className="label">Pay Schedule</span>
                    <span className="value">{paySchedule}</span>
                  </div>
                  <div className="rate">
                    <span className="label">Pay Rate</span>
                    <span className="value">{rate}</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Report Status</TableCell>
                        <TableCell align="right">WorkSheet ID</TableCell>
                        <TableCell align="right">Start Date</TableCell>
                        <TableCell align="right">End Date</TableCell>
                        <TableCell align="right">Default Hours</TableCell>
                        <TableCell align="right">Over Time Hours</TableCell>
                        <TableCell align="right">Total Working Hours</TableCell>
                        <TableCell align="right">Working Days</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {weeklyWorkReports.map((report) => (
                        <TableRow key={report.weeklySubmissionId}>
                          <TableCell
                            onClick={() => setRenderInfo(true)}
                            style={{
                              color:
                                status === "Rejected"
                                  ? "red"
                                  : status === "Approved"
                                  ? "green"
                                  : "orange",
                              textDecoration: "underline",
                              cursor: "pointer",
                            }}
                          >
                            {report.reportStatus}
                          </TableCell>
                          <TableCell component="th" scope="row" align="right">
                            {report.weeklySubmissionId}
                          </TableCell>
                          <TableCell align="right">
                            {report.startDate}
                          </TableCell>
                          <TableCell align="right">{report.endDate}</TableCell>
                          <TableCell align="right">
                            {report.weeklyCompanyTotalWorkingTime}
                          </TableCell>
                          <TableCell align="right">
                            {report.weeklyEmployeeOverTimeHours}
                          </TableCell>
                          <TableCell align="right">
                            {report.weeklyEmployeeTotalWorkedTime}
                          </TableCell>
                          <TableCell align="right">
                            {report.weeklyEmployeeWorkingDays}
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
