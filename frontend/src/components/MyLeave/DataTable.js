import React from 'react'
// import FormDeleteItem from './FormDelete';
// import ApplyLeaveFormModal from './FormApplyLeav';

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <td >{item.id}</td>
          <td>Chanthy Tha</td>
          <td>{item.leaveTypeid}</td>
          <td>{item.fromDate}</td>
          <td>{item.toDate}</td>
          <td>{item.totalLeave}</td>
          <td style={{
            background: 'red',
            borderRadius: '15px',
            textAlign: 'center',
            color: 'white'
            }}>Pending</td>
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