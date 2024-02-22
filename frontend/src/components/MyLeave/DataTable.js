import React from 'react'

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map((item, index) => {
      return (
        <tr key={index}>
          <td >{index + 1}</td>
          <td >
            {item.employee != null ? item.employee.firstname + " " : ""}
            {item.employee != null ? item.employee.lastname : ""}
          </td>
          <td>{item.leavetype ? item.leavetype.name : ""}</td>
          <td>{item.fromDate}</td>
          <td>{item.toDate}</td>
          <td>{item.totalLeave}</td>
          <td className='leaveStatus'>Pending</td>
          <td>{item.reason}</td>
          <td>{item.created}</td>
        </tr>
      )
    })
  }
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Leave Type</th>
          <th>Leave From</th>
          <th>Leave To</th>
          <th>No Of Days</th>
          <th>Status</th>
          <th>Reason</th>
          <th>Posting Date</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}


export default DataTable;