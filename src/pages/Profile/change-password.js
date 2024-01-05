import React, { useState, useEffect } from 'react';

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Set the default form data using the fetched data
        setFormData(data);
      })
      .catch(error => {
        console.log('Error fetching sample data:', error);
      });
  }, []); // Empty dependency array to only run on component mount

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform password change logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };


  return (
    <div class="container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="currentPassword" class="form-label">Current Password:</label>
            <input type="password" class="form-control" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange}required />
          </div>
          <div class="mb-3">
            <label for="newPassword"  class="form-label">New Password:</label>
            <input type="password"  class="form-control" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
          </div>
          <div class="mb-3">
            <label for="confirmPassword"  class="form-label">Confirm Password:</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}  onChange={handleChange} required />
          </div>

          <input type="submit" class="btn btn-primary" value="Change Password" />

      </form>
    </div>
  );
};

export default ChangePasswordForm;