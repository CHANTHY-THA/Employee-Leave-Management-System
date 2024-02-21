import React from 'react'
import ModalForm from './Modal';
import FormDeleteItem from './FormDelete';
// import { format } from 'date-fns';

function DataTable(props){
  if(props.items !== undefined){
    var items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <td >{item.id}</td>
          <td>{item.departmentName}</td>
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
              <th >ID</th>
              <th >Department Name</th>
              <th >Created</th>
              <th >Action</th>
            </tr>
        </thead>
        <tbody>
            {items}
        </tbody>
    </table>
);
}


export default DataTable