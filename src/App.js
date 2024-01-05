import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import Dashboard from "./pages/Dashboard";
import LeaveManagement from "./pages/LeaveManagement";
import LeaveType from "./pages/LeaveType";
import MyLeave from "./pages/MyLeave";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto sidebar-content">
          <Menu />
        </div>

        <div className="main-content-body">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/employee" element={<Dashboard />}></Route>
            <Route path="/department" element={<Dashboard />}></Route>
            <Route path="/leave-type" element={<LeaveType />}></Route>
            <Route path="/my-leave" element={<MyLeave />}></Route>
            <Route
              path="/leave-management"
              element={<LeaveManagement />}
            ></Route>
            <Route
              path="/leave-detail"
              element={<LeaveDetail />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
