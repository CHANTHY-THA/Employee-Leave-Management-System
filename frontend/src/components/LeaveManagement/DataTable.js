import React from 'react'
import FormDeleteItem from './FormDelete';
import ApplyLeaveFormModal from './FormApplyLeav';

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <td >{item.id}</td>
          <td>{item.departmentName}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{item.created}</td>
          <td>
            <div className='d-flex'>
              <ApplyLeaveFormModal buttonLabel="Edit" item={item} updateState={props.updateState} ></ApplyLeaveFormModal>
              <FormDeleteItem buttonLabel="Delete" item={item} deleteItemFromState={props.deleteItemFromState}></FormDeleteItem>
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
          <th>Created</th>
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