import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import Dashboard from "./pages/dashboard";
import LeaveManagement from "./pages/LeaveManagement";
import Menu from "./components/MenuComponent";

function App() {

  let user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto sidebar-content">
          {(() => {
            if (user) {
              return ( <Menu />)
            }
          })()}
        </div>

        <div className="main-content-body">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/department" element={<Dashboard />}></Route>
            <Route path="/employee" element={<Dashboard />}></Route>
            <Route
              path="/leave-management"
              element={<LeaveManagement />}
            ></Route>
            <Route path="/leave-detail" element={<LeaveDetail />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
