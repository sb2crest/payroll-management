import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/login/Login";
import Dashboard from "./screen/employee/dashboard/Dashboard";
import TimeSheet from "./screen/employee/timesheet/TimeSheet";
import EditHours from "./screen/employee/edit hours/EditHours";
import Info from "./screen/employee/info/Info";
import ManagerDashboard from "./screen/manager/dashboard/ManagerDashboard";
import AddConsignee from "./screen/manager/add consignee/AddConsignee";
import AddTimeSheet from "./screen/manager/timesheet/AddTimeSheet";
import AddHours from "./screen/manager/add hours/AddHours";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}></Route>
          <Route path="/employee-dashboard" element={<Dashboard />} />
          <Route path="/timesheet" element={<TimeSheet />}></Route>
          <Route path="/edit-hours" element={<EditHours />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/add-consignee" element={<AddConsignee />} />
          <Route path="/add-timesheet" element={<AddTimeSheet />} />
          <Route path="/add-hours" element={<AddHours />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
