import React, { useState } from "react";
import Header from "../../components/HeaderComponent";
import App from "../../App";
import DataTable from "react-data-table-component";
import dataJson from "../../data.json";
import LeaveFormModal from "../../components/MyLeave/FormModal";

class EmployeeLeave extends React.Component {
  render() {
    const columns = [
      {
        name: "No",
        selector: row => row.id,
        sortable: true,
      },
      {
        name: "Leave Type",
        selector: row => row.LeaveType,
        sortable: true,
      },
      {
        name: "From Date",
        selector: row => row.LeaveFrom,
        sortable: true,
      },
      {
        name: "To Date",
        selector: row => row.LeaveTo,
        sortable: true,
      },
      {
        name: "Amount",
        selector: row => row.NoDay,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.Status,
        sortable: true,
      },
      {
        name: "Reason",
        selector: row => row.Reason,
        sortable: true,
      },
      {
        name: "Created Date",
        selector: row => row.Created,
        sortable: true,
      },
    ];
    const leaveLists = dataJson.LeaveLists;
    const userJSON = localStorage.getItem("user");
    const userObject = JSON.parse(userJSON);

    let data = leaveLists.filter(
      (item) => item.EmployeeName === "Pros"
    );



    function handleFilter(event) {
      data = data.filter(row => {
        return row.LeaveType.toLowerCase().includes(event.target.value.toLowerCase())
      })
    }

    return (
      <div className="leave-history-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-histroy-page-main">
          <div className="leave-history-container">
            <h3>My Leaves {App.EmployeeLeave}</h3>
            <div className="leave-history-content">
              <div className="mt-2 mb-2 d-flex justify-content-between">
                <div>
                  <LeaveFormModal buttonLabel="Request Leave" />
                </div>
                <div className="d-flex ">
                  <input type="text" className="form-control" placeholder="Search" onChange={handleFilter} />
                </div>
              </div>
              <DataTable columns={columns} data={data} pagination></DataTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeLeave;
