import React from 'react'
import ModalForm from './Modal';
import FormDeleteItem from './FormDelete';

function DataTable(props) {
  if (props.items !== undefined) {
    var items = props.items.map((item,index) => {
      return (
        <tr key={index}>
          <td >{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>{item.created}</td>
          <td>
            <div className='d-flex'>
              <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState} ></ModalForm>
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
          <th>Name</th>
          <th>Amount (A Year)</th>
          <th>Created Date</th>
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