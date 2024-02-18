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
import Profile from "./pages/Profile/profile";
import Department from "./pages/Dapartment/department";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/Employees/Form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Protected from "./components/Protected";

const ProtectedDashboard = () => {
  return <Protected>
    <Dashboard />
  </Protected>
}

const ProtectedProfile = () => {
  return <Protected>
    <Profile />
  </Protected>
}

const ProtectedEmployees = () => {
  return <Protected>
    <Employees />
  </Protected>
}

const ProtectedDepartment = () => {
  return <Protected>
    <Department />
  </Protected>
}

const ProtectedLeaveTypes = () => {
  return <Protected>
    <LeaveTypes />
  </Protected>
}

const ProtectedMyLeave = () => {
  return <Protected>
    <MyLeave />
  </Protected>
}

const ProtectedLeaveManagement = () => {
  return <Protected>
    <LeaveManagement />
  </Protected>
}

const ProtectedLeaveDetail = () => {
  return <Protected>
    <LeaveDetail />
  </Protected>
}

const ProtectedEmployeeDetail = () => {
  return <Protected>
    <EmployeeDetail />
  </Protected>
}

const ProtectedEmployeeForm = () => {
  return <Protected>
    <EmployeeForm />
  </Protected>
}

const ProtectedChangePassword = () => {
  return <Protected>
    <ChangePassword />
  </Protected>
}



function App() {

  // let user = localStorage.getItem("user");

  const [user, setUser] = useState({});
  const [isLogin, setLogin] = useState(false);

  const getUser = () => {

    // console.log("come in herer ")
    const token = localStorage.getItem("token");
    let isLogin = false;
    if (token) {
      setLogin(true)
      isLogin = true
    }
    // console.log("🚀 ~ Menu ~ render ~ token:12345", token)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    if (isLogin) {
      axios.post(process.env.REACT_APP_URL + '/auth/profile', {}, { headers: headers }, { validateStatus: () => true })
        .then(res => {
          console.log("🚀 ~ axios.post ~ res.data2222:", res.data)
          setUser(res.data.result)
        })
    } else {
      if (!isLogin) {
        console.log("🚀 ~ getUser ~ isLogin:", isLogin)
        console.log("werwer", window.location)
        if (window.location.pathname != "/" && window.location.pathname != "/login") {
          window.location.replace("/login")

        }
      }

    }

  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto sidebar-content">
          {(() => {

            if (isLogin && window.location.pathname != '/login' && window.location.pathname != '/') {
              console.log("🚀 ~ axios.post ~ user42:", user)

              return (<Menu />)
            }
          })()}
        </div>

        <div className="main-content-body">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<ProtectedProfile />}></Route>
            <Route path="/dashboard" element={<ProtectedDashboard />}></Route>
            <Route path="/employees" element={<ProtectedEmployees />}></Route>
            <Route path="/department" element={<ProtectedDepartment />}></Route>
            <Route path="/leave-type" element={<ProtectedLeaveTypes />}></Route>
            <Route path="/my-leave" element={<ProtectedMyLeave />}></Route>
            <Route
              path="/leave-management"
              element={<ProtectedLeaveManagement />}
            ></Route>
            <Route
              path="/leave-detail"
              element={<ProtectedLeaveDetail />}
            ></Route>
            <Route
              path="/employees/detail"
              element={<ProtectedEmployeeDetail />}
            ></Route >
            <Route
              path="/employees/form"
              element={<ProtectedEmployeeForm />}
            ></Route >
            <Route
              path="/change-password"
              element={<ProtectedChangePassword />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
