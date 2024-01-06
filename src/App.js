import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import LeaveManagement from "./pages/LeaveManagement";
import MyLeave from "./pages/MyLeave";
import Menu from "./components/MenuComponent";
import Employees from "./pages/Employees";
import EmployeeDetail from "./pages/Employees/Detail";
import LeaveTypes from "./pages/LeaveType";
import ChangePassword from "./pages/ChangePassword";
import Profle from "./pages/Profile/profile";
import Department from "./pages/Dapartment/department";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/Employees/Form";


function App() {

  let user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto sidebar-content">
          {(() => {
            if (user) {
              return (<Menu />)
            }
          })()}
        </div>

        <div className="main-content-body">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profle />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/department" element={<Department />}></Route>
            <Route path="/leave-type" element={<LeaveTypes />}></Route>
            <Route path="/my-leave" element={<MyLeave />}></Route>
            <Route
              path="/leave-management"
              element={<LeaveManagement />}
            ></Route>
            <Route
              path="/leave-detail"
              element={<LeaveDetail />}
            ></Route>
            <Route
              path="/employees"
              element={<Employees />}
            ></Route>
            <Route
              path="/employees/detail"
              element={<EmployeeDetail />}
            ></Route >
            <Route
              path="/employees/form"
              element={<EmployeeForm />}
            ></Route >
            <Route
              path="/change-password"
              element={<ChangePassword />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
