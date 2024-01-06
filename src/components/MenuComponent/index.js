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
              <CgProfile />
              <span>Profile</span>
            </Link>
            <div>
            <Link className={userRole === "employee" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../dashboard ">
              <FaCookie />
              <span>Dashboard</span>
            </Link>
            </div>
            <Link className={userRole === "employee" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../department">
              <TfiLayoutGrid3Alt />
              <span>Department</span>
            </Link>
            <Link className={userRole === "employee" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../leave-type">
              <LuArrowLeftRight />
              <span>Leave Type</span>
            </Link>
            <Link className={userRole === "employee" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../employees">
              <FaAddressBook />
              <span>Employees</span>
            </Link>
            <Link className={userRole === "employee" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../leave-management">
              <MdOutlineMonitor />
              <span>Leave Management</span>
            </Link>
            <Link className={userRole === "admin" ? "nav-link px-2 hidden" : "nav-link px-2"} to="../my-leave">
              <MdOutlineMonitor />
              <span>My Leaves</span>
            </Link>
        </div>
       
        <div className="nav-footer">
          <div>
            <Link to="change-password" className="nav-link  px-2">
              <FaKey />
              <span>Change Password</span>
            </Link>
          </div>
          <div onClick={onLogOut}>
            <Link to="login" className="nav-link  px-2">
              <FaArrowRightToBracket />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
