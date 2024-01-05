import React, { useState } from "react";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
import App from "../../App";
import DataTable from "react-data-table-component";

class EmployeeLeave extends React.Component {
  render() {
    const columns = [
      {
        name: "No",
        selector: row => row.no,
        sortable: true,
      },
      {
        name: "Apply Date",
        selector: row => row.applyDate,
        sortable: true,
      },
      {
        name: "From Date",
        selector: row => row.fromDate,
        sortable: true,
      },
      {
        name: "To Date",
        selector: row => row.toDate,
        sortable: true,
      },
      {
        name: "Days",
        selector: row => row.days,
        sortable: true,
      },
      {
        name: "Type",
        selector: row => row.type,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },
      {
        name: "Reason",
        selector: row => row.reason,
        sortable: true,
      },
    ];

    const data = [
      {
        no: 1,
        applyDate: "02/22/2019",
        fromDate: "05/01/2024",
        toDate: "07/01/2024",
        days: 1,
        type: "Sick Leave",
        status: "Approved",
        reason: "Lorem Ipsum is sim..",
        
      },
      {
        no: 2,
        applyDate: "02/22/2019",
        fromDate: "05/01/2024",
        toDate: "07/01/2024",
        days: 1,
        type: "Simple Leave",
        status: "Pending",
        reason: "Lorem Ipsum is sim..",
       
      },
      {
        no: 3,
        applyDate: "02/22/2019",
        fromDate: "05/01/2024",
        toDate: "07/01/2024",
        days: 1,
        type: "Casual Leave",
        status: "Rejected",
        reason: "Lorem Ipsum is sim..",
        
      },
      {
        no: 4,
        applyDate: "02/22/2019",
        fromDate: "05/01/2024",
        toDate: "07/01/2024",
        days: 1,
        type: "Marriage Leave",
        status: "Approved",
        reason: "Lorem Ipsum is sim..",
      
      },
    
    ];

    function handleFilter(event) {
      const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      })

    }

    return (
      <div className="leave-history-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-histroy-page-main">
          <Menu />
          <div className="leave-history-container">
            <h3>Employee Leaves {App.EmployeeLeave}</h3>
            <div className="leave-history-content">
              <div className="text_end mt-3"><input type="text" placeholder="search" onChange={handleFilter}/></div>
              <DataTable columns={columns} data={data} pagination></DataTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeLeave;
