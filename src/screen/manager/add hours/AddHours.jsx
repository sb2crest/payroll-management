import "./hours.scss";
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

const AddHours = () => {
  {
    /* For employees Data Render */
  }
  const [renderAddHours, setRenderAddHours] = useState(false);
  const [renderEditHours, setRenderEditHours] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [getSingleData, setGetSingleData] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [employeeUniqueId, setEmployeeUniqueId] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [workingDays, setWorkingDays] = useState(0);
  const [paramfirst, setParamFirst] = useState("");
  const [paramlast, setParamLast] = useState("");
  const [timeSheet, setTimeSheet] = useState([]);
  const [timeSheetId, setTimeSheetId] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [assignedDefaultHours, setAssignedDefaultHours] = useState(0);
  const [totalWorkedHours, setTotalWorkedHours] = useState(0);
  const [overTimeWorkedHours, setOverTimeWorkedHours] = useState(0);
  const [update, setUpdate] = useState(false);
  const [weeklyWorkReportDtoList, setWeeklyWorkReportDtoList] = useState([]);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/payrollManager/findAllEmployeesByMangerUniqueID?managerUniqueId=MGR2`
      );
      const data = response.data;
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const renderSingleEmployee = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/payrollEmployee/searchEmployee?firstName=${firstName}&lastName=${lastName}`
      );
      const data = response.data;
      console.log(data);
      setEmployee(data.employeeDataList);
      console.log(employee);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setGetSingleData(true);
    renderSingleEmployee();
  };

  const handleAddHours = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/payrollEmployee/findEmployee?firstName=Nike&lastName=Json`
      );
      const data = response.data;
      console.log(data);
      setRenderAddHours(true);
      setEmployeeUniqueId(data.employeeUniqueId);
      setDateOfJoining(data.dateOfJoining);
      setPaymentMode(data.paymentMode);
      setWorkingDays(data.workingDays);
      setParamFirst(data.firstName);
      setParamLast(data.lastName);
      setTimeSheet(data.timeSheet);
      console.log(timeSheet);
      const newTimeSheetId = data.timeSheet[0].timeSheetId;
      setTimeSheetId(newTimeSheetId);
      const newDefaultHours = data.timeSheet[0].assignedDefaultHours;
      setAssignedDefaultHours(newDefaultHours);
    } catch (error) {
      console.error("Error showing data:", error);
    }
  };

  useEffect(() => {
    console.log("TimeSheet ID:", timeSheetId);
    console.log("Default Hours:", assignedDefaultHours);
  }, [timeSheetId, assignedDefaultHours]);

  const updatePayHours = async () => {
    const requestBody = {
      weeklySubmissionId: timeSheetId,
      startDate: fromDate,
      endDate: toDate,
      assignedDefaultHours: assignedDefaultHours,
      totalWeeklyWorkedHours: totalWorkedHours,
      totalOvertimeWorkedHours: overTimeWorkedHours,
    };
    console.log("Request Body:", requestBody);
    try {
      const response = await axios.put(
        "http://localhost:8080/api/payrollManager/updateWeeklyWorkedHours",
        requestBody
      );
      const data = response.data;
      console.log(data);
      console.log(data.weeklyWorkReportDtoList);
      setWeeklyWorkReportDtoList(data.weeklyWorkReportDtoList);
      console.log("weeklyWorkReportDtoList:", weeklyWorkReportDtoList);
      setUpdate(true);
    } catch (error) {
      console.error("Error updating pay hours:", error);
    }
  };

  const handleUpdateButton = (e) => {
    e.preventDefault();
    updatePayHours();
  };

  return (
    <div>
      {renderAddHours ? (
        <>
          <div className="edit-hours">
            <ManagerSidebar />
            <div className="edit-hours-container">
              <ManagerNavBar />
              <div className="content-container">
                <div className="top">
                  <div className="data">
                    <span className="label">Employee ID</span>
                    <span className="value">{employeeUniqueId}</span>
                  </div>
                  <div className="data">
                    <span className="label">First Name</span>
                    <span className="value">{paramfirst}</span>
                  </div>
                  <div className="data">
                    <span className="label">Last Name</span>
                    <span className="value">{paramlast}</span>
                  </div>
                  <div className="data">
                    <span className="label">DOJ</span>
                    <span className="value">{dateOfJoining}</span>
                  </div>
                  <div className="data">
                    <span className="label">Payment Mode</span>
                    <span className="value">{paymentMode}</span>
                  </div>
                  <div className="data">
                    <span className="label">Working Days</span>
                    <span className="value">{workingDays} Days</span>
                  </div>
                </div>
                <div className="center">
                  {update ? (
                    <>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>WorkSheet ID</TableCell>
                              <TableCell align="right">Start Date</TableCell>
                              <TableCell align="right">End Date</TableCell>
                              <TableCell align="right">Default Hours</TableCell>
                              <TableCell align="right">Over Time</TableCell>
                              <TableCell align="right">Total Hours</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {weeklyWorkReportDtoList.map((emp) => (
                              <TableRow key={emp.weeklySubmissionId}>
                                <TableCell>{emp.weeklySubmissionId}</TableCell>
                                <TableCell align="right">
                                  {emp.startDate}
                                </TableCell>
                                <TableCell align="right">
                                  {emp.endDate}
                                </TableCell>
                                <TableCell align="right">
                                  {emp.assignedDefaultHours} Hours
                                </TableCell>
                                <TableCell align="right">
                                  {emp.totalOvertimeWorkedHours} Hours
                                </TableCell>
                                <TableCell align="right">
                                  {emp.totalWeeklyWorkedHours} Hours
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </>
                  ) : (
                    <>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>WorkSheet ID</TableCell>
                              <TableCell align="right">Start Date</TableCell>
                              <TableCell align="right">End Date</TableCell>
                              <TableCell align="right">Default Hours</TableCell>
                              <TableCell align="right">Over Time</TableCell>
                              <TableCell align="right">Total Hours</TableCell>
                              {/* <TableCell align="right">Report Status</TableCell> */}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {timeSheet.map((emp) => (
                              <TableRow key={emp.timeSheetId}>
                                <TableCell>{emp.timeSheetId}</TableCell>
                                <TableCell align="right">
                                  {emp.fromDate}
                                </TableCell>
                                <TableCell align="right">
                                  {emp.toDate}
                                </TableCell>
                                <TableCell align="right">
                                  {emp.assignedDefaultHours} Hours
                                </TableCell>
                                <TableCell align="right">
                                  {emp.overTimeWorkedHours} Hours
                                </TableCell>
                                <TableCell align="right">
                                  {emp.totalWorkedHours} Hours
                                </TableCell>
                                {/* <TableCell align="right">
                                  {emp.status}
                                </TableCell> */}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </>
                  )}
                  <div className="edit-hour-button">
                    <button onClick={() => setRenderEditHours(true)}>
                      Edit Hours
                    </button>
                    <button onClick={() => setRenderAddHours(false)}>
                      Back
                    </button>
                  </div>
                </div>
                {renderEditHours && (
                  <>
                    <div className="edit-hour-form">
                      <div className="form-container">
                        <div className="form-data">
                          <div className="label-value">
                            <label htmlFor="start">Start Date</label>
                            <input
                              id="start"
                              onChange={(e) => setFromDate(e.target.value)}
                              value={fromDate}
                            />
                          </div>
                          <div className="label-value">
                            <label htmlFor="end">End Date</label>
                            <input
                              id="end"
                              onChange={(e) => setToDate(e.target.value)}
                              value={toDate}
                            />
                          </div>
                          <div className="label-value">
                            <label htmlFor="overtime">Over Time</label>
                            <input
                              id="overtime"
                              onChange={(e) =>
                                setOverTimeWorkedHours(e.target.value)
                              }
                              value={overTimeWorkedHours}
                            />
                          </div>
                          <div className="label-value">
                            <label htmlFor="total">Total Working Hours</label>
                            <input
                              id="total"
                              onChange={(e) =>
                                setTotalWorkedHours(e.target.value)
                              }
                              value={totalWorkedHours}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="update-cancel-container">
                        <button onClick={handleUpdateButton}>Update</button>
                        <button onClick={() => setRenderEditHours(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="add-hours">
          <ManagerSidebar />
          <div className="add-hours-container">
            <ManagerNavBar />
            <div className="data-table">
              <div className="top">
                <div className="search-container">
                  <input
                    type="text"
                    className="search-text-box"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                  <input
                    type="text"
                    className="search-text-box"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                  <button className="search-button" onClick={handleSearch}>
                    Search
                  </button>
                </div>
                <div className="schedule-rate-container">
                  <div className="schedule">
                    <span className="label">Manager ID</span>
                    <span className="value">PAYBR1245689</span>
                  </div>
                  <div className="rate">
                    <span className="label">Date</span>
                    <span className="value">1 August 2024</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                {getSingleData ? (
                  <>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Default Hours</TableCell>
                            <TableCell align="right">Working Days</TableCell>
                            <TableCell align="right">Payment Mode</TableCell>
                            <TableCell align="center">Hours</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {employee.map((emp) => (
                            <TableRow key={emp.employeeUniqueId}>
                              <TableCell>{emp.employeeUniqueId}</TableCell>
                              <TableCell align="right">
                                {emp.firstName}
                              </TableCell>
                              <TableCell align="right">
                                {emp.lastName}
                              </TableCell>
                              <TableCell align="right">
                                {emp.assignedDefaultHours}
                              </TableCell>
                              <TableCell align="right">
                                {emp.workingDays}
                              </TableCell>
                              <TableCell align="right">
                                {emp.paymentMode}
                              </TableCell>
                              <TableCell align="right">
                                <button
                                  className="search-button"
                                  onClick={handleAddHours}
                                >
                                  Edit Hours
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                ) : (
                  <>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Default Hours</TableCell>
                            <TableCell align="right">Working Days</TableCell>
                            <TableCell align="right">Payment Mode</TableCell>
                            <TableCell align="center">Hours</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {employees.map((employee) => (
                            <TableRow key={employee.employeeUniqueId}>
                              <TableCell>{employee.employeeUniqueId}</TableCell>
                              <TableCell align="right">
                                {employee.firstName}
                              </TableCell>
                              <TableCell align="right">
                                {employee.lastName}
                              </TableCell>
                              <TableCell align="right">
                                {employee.assignedHours}
                              </TableCell>
                              <TableCell align="right">
                                {employee.workingDays}
                              </TableCell>
                              <TableCell align="right">
                                {employee.paymentMode}
                              </TableCell>
                              <TableCell align="right">
                                <button
                                  className="search-button"
                                  onClick={handleAddHours}
                                >
                                  Edit Hours
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddHours;
