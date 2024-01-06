import React from "react";
import "./profile.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
// import Records from "../../data.json";

class Profle extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="profile-page-main">
          <div className="profile-container">
            <h3>My Profile {App.LeaveManagement}</h3>
            <div className="profile-content">

                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profle;
