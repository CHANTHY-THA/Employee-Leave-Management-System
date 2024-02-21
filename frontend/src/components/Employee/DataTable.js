import React from 'react'
import ModalForm from './Modal';
import FormDelete from './FormDelete';

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <td >{item.id}</td>
          <td>{item.departmentName}</td>
          <td>{item.created}</td>
          <td>{item.created}</td>
          <td>{item.created}</td>
          <td>
            <div className='d-flex'>
              <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState} ></ModalForm>
              <FormDelete item={item} deleteItemFromState={props.deleteItemFromState}></FormDelete>
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
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Status</th>
          <th>Created Date</th>
          <th className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
}


export default DataTable