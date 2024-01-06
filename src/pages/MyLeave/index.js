import React from "react";
import "./myleave.css";
import Menu from "../../components/MenuComponent";
import Header from "../../components/HeaderComponent";

class MyLeave extends React.Component {
  render() {
    return (
      <div className="main-container-page">
        <Menu className="nav-bar" />
        <div className="main-content">
          <Header  content="Employee Leave Management System" />
          <div className="my-leave-container"></div>
        </div>
      </div>
    );
  }
}

export default MyLeave;
