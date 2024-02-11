import React from "react";
import "./leaveDetail.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
import App from "../../App";

class LeaveDetail extends React.Component {
  render() {
    return (
      <div className="leave-detail-page">
        <Header parentToChild={"Employee Leave Management System"}/>
        <div className="leave-detail-page-main">
          {/* <Menu/> */}
          <div className="leave-detail-container">
          <h3>Leave Details {App.LeaveDetail}</h3>
            <div className="leave-detail-content">
              <div className="detail-row">
                <div className="detail-col">
                  <label>Emp Name:</label>
                  <span>Mengheang PHO</span>
                </div>
                <div className="detail-col">
                  <label>Emp ID:</label>
                  <span>PNC0014</span>
                </div>
                <div className="detail-col">
                  <label>Gender:</label>
                  <span>Male</span>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-col">
                  <label>Emp Email:</label>
                  <span>mengheangpho@gmail.com</span>
                </div>
                <div className="detail-col">
                  <label>Emp contact number:</label>
                  <span>012345678</span>
                </div>
                <div className="detail-col">
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-col">
                  <label>Leave type:</label>
                  <span>Sick leave</span>
                </div>
                <div className="detail-col">
                  <label>Leave start date:</label>
                  <span>29 Feb 2024</span>
                </div>
                <div className="detail-col">
                  <label>Leave end date:</label>
                  <span>02 Mar 2024</span>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-col-des">
                  <label>Emp leave description:</label>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                </div>
                
              </div>
              <div className="detail-row">
                <div className="detail-col">
                  <label>Leave status:</label>
                  <span id="accepted">Accepted</span>
                </div>
                <div className="detail-col">
                </div>
                <div className="detail-col">
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-col">
                  <label>Admin remark:</label>
                  <span id="approved">Approved</span>
                </div>
                <div className="detail-col">
                </div>
                <div className="detail-col">
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-col">
                  <label>Admin Action taken date:</label>
                  <span>29 Feb 2024 </span>
                </div>
                <div className="detail-col">
                </div>
                <div className="detail-col">
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


export default LeaveDetail;
