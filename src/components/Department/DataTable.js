import React from 'react'
import ModalForm from './Modal';

function DataTable(props){
  const deleteItem = id => {
    let confirmDelete = window.confirm('Are you sure, your want to delete this item ?')
    if(confirmDelete){
        props.deleteItemFromState(id)
    }
  }
  const items = props.items.map(item => {
    return (
      <tr key={item.id}>
        <td >{item.id}</td>
        <td>{item.departmentName}</td>
        <td>{item.created}</td>
        <td>
          <div className='d-flex'>
            <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
            <div style={{height:"30px"}} type="button" className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>Delete</div>
          </div>
        </td>
      </tr>
      )
    })
  return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th >ID</th>
                <th >Department Name</th>
                <th >Created</th>
                <th >Action</th>
            </tr>
        </thead>
        <tbody >
            {items}
        </tbody>
    </table>
);
}


export default DataTable