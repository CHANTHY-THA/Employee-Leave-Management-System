import React from 'react'
import ModalForm from './Modal';
import FormDeleteItem from './DeleteForm';
// import { format } from 'date-fns';

function DataTable(props) {
    if (props.items !== undefined) {
        var items = props.items.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.email}</td>
                    <td>{item.position}</td>
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
                    <th >#</th>
                    <th >First Name</th>
                    <th >Last Name</th>
                    <th >Phone Number</th>
                    <th >Email</th>
                    <th >Position</th>
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