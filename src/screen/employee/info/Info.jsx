import "./info.scss";
import Navbar from "../../../component/navbar/Navbar";
import Sidebar from "../../../component/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function createData(
  id,
  date,
  start,
  end,
  default_hours,
  working_hours,
  over_time,
  total_hours
) {
  return {
    id,
    date,
    start,
    end,
    default_hours,
    working_hours,
    over_time,
    total_hours,
  };
}

const rows = [
  createData(
    1,
    "2024-08-02",
    "09:00:00",
    "18:00:00",
    "8.0",
    "8.0",
    "1.0",
    "9.0"
  ),
  createData(
    2,
    "2024-08-02",
    "09:00:00",
    "18:00:00",
    "8.0",
    "8.0",
    "1.0",
    "9.0"
  ),
  createData(
    3,
    "2024-08-02",
    "09:00:00",
    "18:00:00",
    "8.0",
    "8.0",
    "1.0",
    "9.0"
  ),
  createData(
    4,
    "2024-08-02",
    "09:00:00",
    "18:00:00",
    "8.0",
    "8.0",
    "1.0",
    "9.0"
  ),
  createData(
    5,
    "2024-08-02",
    "09:00:00",
    "18:00:00",
    "8.0",
    "8.0",
    "1.0",
    "9.0"
  ),
];

const Info = ({ weeklySummary }) => {
  return (
    <div className="info">
      <Sidebar />
      <div className="info-container">
        <Navbar />
        <div className="content-container">
          <div className="edit-print-button">
            <Link to="/edit-hours" style={{ textDecoration: "none" }}>
              <button className="button">Edit</button>
            </Link>
            <button className="button">Print</button>
          </div>
          <div className="top">
            <div className="data">
              <span className="label">Status</span>
              <span className="value">Approved</span>
            </div>
            <div className="data">
              <span className="label">Start Date</span>
              <span className="value">01/01/2022</span>
            </div>
            <div className="data">
              <span className="label">End Date</span>
              <span className="value">01/31/2022</span>
            </div>
            <div className="data">
              <span className="label">ID</span>
              <span className="value">PAYBR123456</span>
            </div>
            <div className="data">
              <span className="label">Default Hours</span>
              <span className="value">40.0 Hours</span>
            </div>
            <div className="data">
              <span className="label">Over Time</span>
              <span className="value">10.0 Hours</span>
            </div>
            <div className="data">
              <span className="label">Total Hours</span>
              <span className="value">50.0 Hours</span>
            </div>
          </div>
          <div className="center">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Record ID</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Start Date</TableCell>
                    <TableCell align="right">End Date</TableCell>
                    <TableCell align="right">Default Hours</TableCell>
                    <TableCell align="right">Worked Hours</TableCell>
                    <TableCell align="right">Over Time</TableCell>
                    <TableCell align="right">Total Hours</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.start}</TableCell>
                      <TableCell align="right">{row.end}</TableCell>
                      <TableCell align="right">{row.default_hours}</TableCell>
                      <TableCell align="right">{row.working_hours}</TableCell>
                      <TableCell align="right">{row.over_time}</TableCell>
                      <TableCell align="right">{row.total_hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="bottom">Comment-box</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
