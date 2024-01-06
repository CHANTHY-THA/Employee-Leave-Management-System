import React from "react";
import "./myleave.css";
import Header from "../../components/HeaderComponent";

class MyLeave extends React.Component {
  render() {
    return (
      <div className="dashboard-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="dashboard-container">
          My leaves
        </div>
      </div>
    );
  }
}

export default MyLeave;
