import React, { useState } from "react";
import "./leaveManagement.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
// import DataTable from "react-data-table-component";
import { MdEdit, MdOutlineVisibility } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Records from "../../data.json";
import { Link } from "react-router-dom";

class LeaveManagement extends React.Component {
  render() {
    let leaveRecord = Records.LeaveLists;
    function onClickDelete(row, index) {
      const leaveItem = leaveRecord.find((leave) => leave.id == row.id);
      if (leaveItem) {
        return leaveRecord.filter((f) => f.id !== leaveItem.id);
      }
    }

    function onClickEdit(row, index) {
      console.log(row);
    }

    return (
      <div className="leave-history-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-histroy-page-main">
          <div className="leave-history-container">
            <h3>LEAVE HISTORY {App.LeaveManagement}</h3>
            <div className="leave-history-content">
              <div className="text_end mt-3 mb-2">
                <input className="searchBtn" type="text" placeholder="search" />
              </div>
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">Leave From</th>
                    <th scope="col">Leave To</th>
                    <th scope="col">No Of Days</th>
                    <th scope="col">Status</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Posting Date</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRecord.map((leave, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{leave.EmployeeName}</td>
                        <td>{leave.LeaveType}</td>
                        <td>{leave.LeaveFrom}</td>
                        <td>{leave.LeaveTo}</td>
                        <td>{leave.NoDay} day</td>
                        <td>
                          {(() => {
                            if (leave.Status === "Draft") {
                              return (
                                <span className="label label-draft">
                                  {leave.Status}
                                </span>
                              );
                            } else if (leave.Status === "Pending") {
                              return (
                                <span className="label label-pending">
                                  {leave.Status}
                                </span>
                              );
                            } else if (leave.Status === "Approved") {
                              return (
                                <span className="label label-approve">
                                  {leave.Status}
                                </span>
                              );
                            } else if (leave.Status === "Not Approve") {
                              return (
                                <span className="label label-notapprove">
                                  {leave.Status}
                                </span>
                              );
                            }
                          })()}
                        </td>
                        <td>{leave.Reason}</td>
                        <td>{leave.Created}</td>
                        <td>
                          <span className="actions">
                            <MdEdit
                              className="editIcon"
                              onClick={() => {
                                onClickEdit(leave, index);
                              }}
                            />
                            <MdDelete
                              className="deleteIcon"
                              onClick={() => {
                                onClickDelete(leave, index);
                              }}
                            />
                            <Link to="/leave-detail" className="nav-link  px-2"><MdOutlineVisibility /></Link>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveManagement;
