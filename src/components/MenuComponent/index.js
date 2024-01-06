import React from "react";
import "./menu-component.css";
// import React, { Component } from 'react';
import { FaCookie, FaAddressBook, FaKey } from "react-icons/fa";
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

    return (
      <div className="menu-container">
        <div className="nav-header">
          <img src="./../../images/profile.png"></img>
          <h5>Admin</h5>
        </div>

        <div className="nav-body">
          <div>
            <Link to="dashboard" className="nav-link  px-2">
              <FaCookie />
              <span>Dashboard</span>
            </Link>
          </div>
          <div>
            <Link to="department" className="nav-link  px-2">
              <TfiLayoutGrid3Alt />
              <span>Department</span>
            </Link>
          </div>
          <div>
            <Link to="leave-type" className="nav-link  px-2">
              <LuArrowLeftRight />
              <span>Leave Type</span>
            </Link>
          </div>
          <div>
            <Link to="employee" className="nav-link  px-2">
              <FaAddressBook />
              <span>Employees</span>
            </Link>
          </div>
          <div>
            <Link to="leave-management" className="nav-link  px-2">
              <MdOutlineMonitor />
              <span>Leave Management</span>
            </Link>
          </div>
          <div>
            <Link to="leave-detail" className="nav-link  px-2">
              <MdOutlineMonitor />
              <span>Leave Details</span>
            </Link>
          </div>
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
