import React, { useState, useEffect } from "react";
import "./menu-component.css";
// import React, { Component } from 'react';
import { FaCookie, FaAddressBook, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuArrowLeftRight } from "react-icons/lu";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { MdOutlineMonitor } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ConfirmModal from "../Logout/ConfirmModal";
import axios from "axios";


function Menu() {
  const [user, setItems] = useState({});
  const [userRole, setRole] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [background, setBackground] = useState("");
  const [message, setMessage] = useState("");
  const getItems = () => {


    const token = localStorage.getItem("token");
    console.log("🚀 ~ Menu ~ render ~ token:12345", token)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    }
    axios.post(process.env.REACT_APP_URL + '/auth/profile', {}, { headers: headers }, { validateStatus: () => true })
      .then(res => {
        console.log("🚀 ~ axios.post ~ res.data:", res.data)

        setItems(res.data.result)
        setRole(res.data.result.role)
      })

  };

  const addItemToState = (result) => {
    if (result.id > 0) {
      setBackground("Success");
    } else {
      setBackground("Danger");
    }
    getItems();
    setShowAlert(true);
    setMessage(result.message);
  };

  const updateState = (result) => {
    if (result.id > 0) {
      setBackground("Success");
    } else {
      setBackground("Danger");
    }
    getItems();
    setShowAlert(true);
    setMessage(result.message);
  };
  const deleteItemFromState = (result) => {
    if (result.id > 0) {
      setBackground("Success");
    } else {
      setBackground("Danger");
    }
    getItems();
    setShowAlert(true);
    setMessage(result.message);
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="menu-container">
      <div className="nav-header">
        <img src="./../../images/profile.png"></img>
        <h5>{user.firstname} {user.lastname}</h5>
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
        <Link className="nav-link  px-2">
          <ConfirmModal buttonLabel="Logout" />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
