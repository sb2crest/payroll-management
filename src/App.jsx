import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/login/Login";
import Dashboard from "./screen/employee/dashboard/Dashboard";
import TimeSheet from "./screen/employee/timesheet/TimeSheet";
import EditHours from "./screen/employee/edit hours/EditHours";
import Info from "./screen/employee/info/Info";
import ManagerDashboard from "./screen/manager/dashboard/ManagerDashboard";

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
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
