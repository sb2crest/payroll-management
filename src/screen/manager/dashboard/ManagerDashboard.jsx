import "./dashboard.scss";
import ManagerSidebar from "../../../component/manager/sidebar/ManagerSideBar";
import Widget from "../../../component/manager/widget/Widget";
import ManagerNavBar from "../../../component/manager/navbar/ManagerNavBar";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { BarChart } from "@mui/x-charts/BarChart";

const ManagerDashboard = () => {
  return (
    <div className="dashboard">
      <ManagerSidebar />
      <div className="dashboard-container">
        <ManagerNavBar />
        <div className="widgets">
          <Widget
            title={"Number of Employees"}
            counter={"25 Employee"}
            link={"See All Employee"}
          />
          <Widget
            title={"Upcoming Payroll Date "}
            counter={"1 August 2024"}
            link={"See Payroll Calendar"}
          />
          <Widget
            title={"Payroll Percentage "}
            counter={"75%"}
            link={"See All Payroll History"}
          />
          <Widget
            title={"Leave Balance"}
            counter={"25 Days"}
            link={"See Leave Calendar"}
          />
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

export default ManagerDashboard;
