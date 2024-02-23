import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../../components/HeaderComponent";
import axios from "axios";
import ModalForm from "../../components/Profile/Modal";

function Profile() {
  const [user, setItems] = useState({});
  const [countLeave, setCountLeave] = useState({});
  const token = localStorage.getItem("token");
  const userID = Number(localStorage.getItem("userID"));

  const getItems = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    axios.post(process.env.REACT_APP_URL + '/auth/profile', {}, { headers: headers }, { validateStatus: () => true })
      .then(res => {
        // console.log("profile", res.data.result);
        setItems(res.data.result)
      })
  };

  const getCountLeave = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    axios.post(process.env.REACT_APP_URL + '/leave/count/' + userID, {}, { headers: headers }, { validateStatus: () => true })
      .then(res => {
        // console.log(res.data.result);
        setCountLeave(res.data.result)
      })
  }

  useEffect(() => {
    getItems();
    getCountLeave();
  }, []);

  return (
    <div className="profile-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div className="profile-page-main">
        <div className="profile-container">
          <h3>My Profile</h3>
          <div className="profile-content">
            <div className="profile-content-left ">
              <div className="profile-left-top">
                <h4>Employee Info</h4>
                <table className="table table-hover table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">Emp Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Start working Day</th>
                      <td >{user.created}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total leave</th>
                      <td >{user.totalLeave}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Taken leave</th>
                      <td >{countLeave >= 0 ? countLeave : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total leave Remaining</th>
                      <td >{countLeave >= 0 ? user.totalLeave - countLeave : ""}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="profile-left-bottom">
                <h4>Address</h4>
                <p>{user.address}, {user.city}, {user.country}</p>
              </div>
            </div>
            <div className="profile-content-right">
              <div className="profile-right-top">
                <img src={user.profile} ></img>
                <h3>{user.firstname} {user.lastname}</h3>
                <h6>{user.position}</h6>
                {/* <input type="file" name="myImage" onChange={onImageChange} /> */}
                <ModalForm buttonLabel="Change Profile" />
                {/* <div className="pb-5">
                  <ModalForm buttonLabel="Change Profile" />
                </div> */}
              </div>
              <div className="profile-right-bottom">
                <div><label>Employee ID:</label><span>{user.id}</span></div>
                <div><label>Emp Gender:</label><span>{user.gender}</span></div>
                {/* <div><label>Emp Manager:</label><span>Mr. VengLeap</span></div> */}
                <div><label>Emp Department:</label><span>{user.department ? user.department.departmentName : ""}</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
