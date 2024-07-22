import "./dashboard.scss";
import Sidebar from "../../../component/sidebar/Sidebar";
import Navbar from "../../../component/navbar/Navbar";
import Widget from "../../../component/widget/Widget";
import Widget_2 from "../../../component/widget/Widget_2";
import Widget_3 from "../../../component/widget/Widget_3";
import Widget_4 from "../../../component/widget/Widget_4";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { BarChart } from "@mui/x-charts/BarChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget_2 />
          <Widget_3 />
          <Widget_4 />
        </div>
        <div className="center">
          <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem>
                  <DateCalendar defaultValue={dayjs("2022-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="chart">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={600}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
