import React, { useState, useEffect } from 'react';
import "./index.css";
import Header from "../../components/HeaderComponent";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.Users) {
          setFormData(prevData => ({
            ...prevData,
            currentPassword: data.Users[0]?.password || '', // Set the initial current password value
          }));
        }
      })
      .catch(error => {
        console.log('Error fetching sample data:', error);
      });
  }, []); 
  //get from input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // submit info 
  const handleSubmit = e => {
    e.preventDefault();
    // Perform password change logic here
    console.log(formData);
    // Reset data after submit
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };


  return (
    <div className="main-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div className="page">
          <h4 className="pt-3 pb-2 ">Change Password</h4>
          <form onSubmit={handleSubmit} className='container'>
              <div className="mb-3">
                <label for="currentPassword" className="form-label">Current Password:</label>
                <input type="password" className="form-control" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="newPassword" className="form-label">New Password:</label>
                <input type="password" className="form-control" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="confirmPassword" className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}  onChange={handleChange} required />
              </div>

              <input type="submit" className="btn btn-primary" value="Change Password" />

          </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;