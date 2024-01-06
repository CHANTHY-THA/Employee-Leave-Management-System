import React from "react";
import "./menu-component.css";
// import React, { Component } from 'react';
import { FaCookie, FaAddressBook, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
class Menu extends React.Component {
  render() {
    function onLogOut() {
      localStorage.clear();
      window.location.replace("/login");
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const userRole = user.role;

    return (
      <div className="menu-container">
        <div className="nav-header">
          <img src="./../../images/profile.png"></img>
          <h5>Admin</h5>
        </div>

        <div className="nav-body">
          <Link to="profile " className="nav-link px-2">
            <div>
              <CgProfile />
              <span>Profile</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="dashboard ">
            <div className={userRole === "employee" ? "  hidden" : ""}>
              <FaCookie />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="department">
            {" "}
            <div className={userRole === "employee" ? "  hidden" : ""}>
              <TfiLayoutGrid3Alt />
              <span>Department</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="leave-type">
            {" "}
            <div className={userRole === "employee" ? "  hidden" : ""}>
              <LuArrowLeftRight />
              <span>Leave Type</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="employees">
            <div className={userRole === "employee" ? "  hidden" : ""}>
              <FaAddressBook />
              <span>Employees</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="leave-management">
            <div className={userRole === "employee" ? "  hidden" : ""}>
              <MdOutlineMonitor />
              <span>Leave Management</span>
            </div>
          </Link>
          <Link className="nav-link px-2" to="my-leave">
            <div className={userRole === "admin" ? "  hidden" : ""}>
              <MdOutlineMonitor />
              <span>My Leaves</span>
            </div>
          </Link>
        </div>

        <div className="nav-footer">
          <Link to="change-password" className="nav-link  px-2">
            <div>
              <FaKey />
              <span>Change Password</span>
            </div>
          </Link>
          <Link to="login" className="nav-link  px-2">
            <div onClick={onLogOut}>
              <FaArrowRightToBracket />
              <span>Log Out</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
