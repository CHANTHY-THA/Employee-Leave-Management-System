import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import MuiAlert from "@material-ui/lab/Alert";
import "./index.css";
import Header from "../../components/HeaderComponent";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  // const [successMessage, setSuccessMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [showMessage, setShowMessage] = useState(false);

  // useEffect(() => {
  //   const userJSON = localStorage.getItem("user");
  //   const userObject = JSON.parse(userJSON);

  //   if (userObject && userObject.password) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       currentPassword: userObject.password
  //     }));
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const userJSON = localStorage.getItem("user");
    const userObject = JSON.parse(userJSON);
    
    if (userObject && formData.currentPassword === userObject.password && formData.newPassword === formData.confirmPassword) {
      // Update the password in the user object
      userObject.password = formData.newPassword;
      // Save the updated user object to local storage
      localStorage.setItem("user", JSON.stringify(userObject));
      // console.log("Password changed successfully!");
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } else {
      console.log("Invalid password or passwords do not match.");
    }
    // Reset the message after 5 seconds
      // setTimeout(() => {
      //   setShowMessage(false);
      // }, 5000);
  };
  return (
    <div className="change-password-page">
      <Header parentToChild={"Employee Leave Management System"} />
 
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