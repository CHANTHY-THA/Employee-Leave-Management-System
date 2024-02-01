import React, { useState } from "react";
import "./style.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
// import DataTable from "react-data-table-component";
import { MdEdit, MdOutlineVisibility } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Records from "../../data.json";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import UseHistory from "react-router-dom";
// import history from 'history';

class Employees extends React.Component {
    render() {
        let userLists = Records.Users;

        function onClickDelete(row, index) {
            const foudnUser = userLists.find((user) => user.id == row.id);
            if (foudnUser) {
                return userLists.filter((f) => f.id !== foudnUser.id);
            }
        }

        function onClickEdit(row, index) {
            console.log(row);
        }

        function onClickView(row, index) {
            // let history = UseHistory();
            // history.push("/employee/detail");
            console.log(row);
        }

        return (
            <div className="leave-history-page">
                <Header parentToChild={"Employee Leave Management System"} />
                <div className="leave-histroy-page-main">
                    <div className="leave-history-container">
                        <h3>Employee List {App.Employees}</h3>
                        <div className="leave-history-content">
                            {/* <div className="text_end mt-3 mb-2">
                                <input type="text" placeholder="search" />
                            </div> */}
                            <div className="mt-2 mb-2 d-flex justify-content-between">
                                <div>
                                    {/* <ModalForm buttonLabel="Add Item" addItemToState={addItemToState} /> */}
                                    <Button href="/employees/form">Add Employee</Button>
                                </div>
                                <div className="d-flex ">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </div>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Employee ID</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created Date</th>
                                        <th scope="col" className="text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userLists.map((user, index) => {
                                        return (
                                            <tr>
                                                {/* <td key={index}>{index + 1}</td> */}
                                                <td>{user.id}</td>
                                                <td>{user.firstName} {user.lastName}</td>
                                                <td>{user.department}</td>
                                                <td>{user.created}</td>
                                                {/* <td>
                                                    {(() => {
                                                        if (leave.Status === "Draft") {
                                                            return (
                                                                <span className="label label-draft">
                                                                    {leave.Status}
                                                                </span>
                                                            );
                                                        } else if (leave.Status === "Pending") {
                                                            return (
                                                                <span className="label label-pending">
                                                                    {leave.Status}
                                                                </span>
                                                            );
                                                        } else if (leave.Status === "Approved") {
                                                            return (
                                                                <span className="label label-approve">
                                                                    {leave.Status}
                                                                </span>
                                                            );
                                                        } else if (leave.Status === "Not Approve") {
                                                            return (
                                                                <span className="label label-notapprove">
                                                                    {leave.Status}
                                                                </span>
                                                            );
                                                        }
                                                    })()}
                                                </td> */}

                                                <td>{user.status}</td>
                                                <td>
                                                    <span className="actions">
                                                        <Link to="/employees/form" className="nav-link  px-2"><MdEdit /></Link>
                                                        <MdDelete
                                                            className="deleteIcon"
                                                            onClick={() => {
                                                                onClickDelete(user, index);
                                                            }}
                                                        />
                                                        <Link to="/employees/detail" className="nav-link  px-2"><MdOutlineVisibility /></Link>
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Employees;
