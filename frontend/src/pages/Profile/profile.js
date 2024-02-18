import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../../components/HeaderComponent";
// import JSONData from "../../data.json";
import axios from "axios";

function Profile() {


  const [user, setItems] = useState({});
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
    <div className="profile-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div className="profile-page-main">
        <div className="profile-container">
          <h3>My Profile</h3>
          <div className="profile-content">
            <div className="profile-content-left ">
              <div className="profile-left-top">
                <h4>Employee Info</h4>
                <table class="table table-hover table-bordered mb-0">
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
                      <td >22</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Taken leave</th>
                      <td >18</td>
                    </tr>
                    <tr>
                      <th scope="row">Total leave Remaining</th>
                      <td >4</td>
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
                <img src="./../../images/profile.png" ></img>
                <h3>{user.firstname} {user.lastname}</h3>
                <h6>{user.position}</h6>
              </div>
              <div className="profile-right-bottom">
                <div><label>Employee ID:</label><span>{user.id}</span></div>
                <div><label>Emp Gender:</label><span>{user.gender}</span></div>
                <div><label>Emp Manager:</label><span>Mr. VengLeap</span></div>
                <div><label>Emp Department:</label><span>{user.departmentId}</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
  // }
}

export default Profile;
