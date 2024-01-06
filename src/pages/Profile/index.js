import React from "react";
import "./profile.css";
import Menu from "../../components/MenuComponent";
import Header from "../../components/HeaderComponent";

class Profile extends React.Component {
  render() {
    return (
      <div className="main-container-page">
        <Menu className="nav-bar" />
        <div className="main-content">
          <Header  content="Employee Leave Management System" />
          <div className="my-profile-container"></div>
        </div>
      </div>
    );
  }
}

export default Profile;