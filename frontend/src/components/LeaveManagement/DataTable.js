import React from 'react'
import FormDeleteItem from './FormDelete';
import ApplyLeaveFormModal from './FormApplyLeav';
import { Button } from "react-bootstrap";

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {item.employee != null ? item.employee.firstname + " " : ""}
            {item.employee != null ? item.employee.lastname : ""}
          </td>
          <td>{item.leavetype ? item.leavetype.name : ""}</td>
          <td>{item.fromDate}</td>
          <td>{item.toDate}</td>
          <td>{item.totalLeave}</td>
          <td>
            {(() => {
              if (item.leaveStatus == "Pending") {
                return <div style={{
                  color: '#FFA07A'
                }} >{item.leaveStatus}</div>;

              } else if (item.leaveStatus == "Approved") {
                return <div style={{
                  color: '#20B2AA'
                }}>{item.leaveStatus}</div>;

              } else if (item.leaveStatus == "Not Approve") {
                return <div style={{
                  color: '#FF4500'
                }}>{item.leaveStatus}</div>;
              }
            })()}
          </td>
          <td>{item.reason}</td>
          <td>{item.created}</td>
          <td>
            <div className='d-flex'>
              {/* <ApplyLeaveFormModal buttonLabel="Edit" item={item} updateState={props.updateState} ></ApplyLeaveFormModal> */}
              <Button href="/leave-detail">View Detail</Button>
              <FormDeleteItem item={item} deleteItemFromState={props.deleteItemFromState}></FormDeleteItem>
            </div>
          </td>
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}


export default DataTable;