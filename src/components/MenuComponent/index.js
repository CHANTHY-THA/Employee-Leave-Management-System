import React from "react";
import "./menu-component.css";
// import React, { Component } from 'react';
import {FaCookie,FaAddressBook,FaKey } from 'react-icons/fa';
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
          <div className="nav-header">
            <img src="./../../images/profile.png"></img>
            <h5>Admin</h5>
          </div>
          <div className="nav-body">
              <div><FaCookie /><a href="/dashboard"><span>Dashboard</span></a></div>
              <div><TfiLayoutGrid3Alt /><span>Department</span></div>
              <div><LuArrowLeftRight /><span>Leave Type</span></div>
              <div><FaAddressBook /><span>Employees</span></div>
              <div><MdOutlineMonitor /><span>Leave Management</span></div>
          </div>
            
            <div className="nav-footer">
              <div><FaKey /><span>Change Password</span></div>
              <div><FaArrowRightToBracket /><a href="../"><span>Log Out</span></a></div>
            </div>  
      </div>
    )
  }
}


export default Menu;
