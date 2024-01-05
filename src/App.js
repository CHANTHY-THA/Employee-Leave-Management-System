import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import Dashboard from "./pages/dashboard";
import LeaveType from "./pages/LeaveType";
import ChangePassword from "./pages/Profile/change-password";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/leave-type' element={<LeaveType/>} />
          <Route path='/leave-detail/:leaveID' element={<LeaveDetail/>} />
          <Route path='/leave-type' element={<LeaveType/>} />
          <Route path='/change-password' element={<ChangePassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
