import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import MuiAlert from "@material-ui/lab/Alert";
import "./index.css";
import Header from "../../components/HeaderComponent";
import axios from 'axios';
import { Toast, ToastContainer } from "react-bootstrap";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [background, setBackground] = useState("");
  const [message, setMessage] = useState("");

  const updateState = (result) => {
    if (result.statusCode !== 201) {
      setBackground("Danger");

    } else {
      setBackground("Success");

    }
    // getItems();
    setShowAlert(true);
    setMessage(result.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("🚀 ~ Menu ~ render ~ token:12345", token)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }


    if (formData.newPassword === formData.confirmPassword) {
      axios.put(process.env.REACT_APP_URL + '/user/changePassword', formData, { headers: headers }, { validateStatus: () => true })
        .then(res => {
          console.log("🚀 ~ axios.post ~ res.data-changepwd:", res.data)
          updateState(res.data);
          const clearpwd = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }
          setFormData(clearpwd);
        }).catch(err => {
          console.log("🚀 ~ handleSubmit ~ err:", err.response.data)
          updateState(err.response.data);
          const clearpwd = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }
          setFormData(clearpwd);


        })


    } else {
      const result = {
        statusCode: 400,
        message: "New Password & Confirm Password must be match!"

      }
      updateState(result);
      const clearpwd = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
      setFormData(clearpwd);
    }
  };
  return (
    <div className="change-password-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div >
        <ToastContainer className="mt-5" position="top-end">
          <Toast
            onClose={() => setShowAlert(false)}
            bg={background.toLowerCase()}
            show={showAlert}
            className="d-inline-block m-1"
            delay={3000}
            autohide
            position='top-end'
          >
            <Toast.Body className='text-white font-weight-bold'>
              {message}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

      <div className="change-password-main-page">
        <h4 className="pt-3 pb-2">Change Password</h4>
        <form onSubmit={handleSubmit} className='container'>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">
              Current Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Change Password" />
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;