import React, { useEffect, useState } from "react";
import "./employee.css";
import Header from "../../components/HeaderComponent";
import ModalForm from "../../components/Employee/Modal";
import DataTable from "../../components/Employee/DataTable";
import { Toast, ToastContainer } from "react-bootstrap";

function Employees(props) {
    // let userLists = Records.Users;

    const [items, setItems] = useState([{}]);
    const [showAlert, setShowAlert] = useState(false);
    const [background, setBackground] = useState("");
    const [message, setMessage] = useState("");
    const getItems = () => {

        // axios.get(process.env.REACT_APP_URL+"/department",{validateStatus: () => true} ).then(res=>{
        //   // console.log("data: " + res.data.data);
        //   setItems(res.data.data)
        // });
        // // setItems(jsonData.Departments)

    };

    const addItemToState = (result) => {
        if (result.id > 0) {
            setBackground("Success");
        } else {
            setBackground("Danger");
        }
        getItems();
        setShowAlert(true);
        setMessage(result.message);
    };

    const updateState = (result) => {
        if (result.id > 0) {
            setBackground("Success");
        } else {
            setBackground("Danger");
        }
        getItems();
        setShowAlert(true);
        setMessage(result.message);
    };
    const deleteItemFromState = (result) => {
        if (result.id > 0) {
            setBackground("Success");
        } else {
            setBackground("Danger");
        }
        getItems();
        setShowAlert(true);
        setMessage(result.message);
    };

    const filterData = (e) => {
        const value = e.target.value;
        if (value !== "") {
            const data = items.filter(dep =>
                dep.departmentName.toLowerCase().includes(value.toLowerCase())
            );
            setItems(data);
        } else {
            getItems();
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="leave-history-page">
            <Header parentToChild={"Employee Leave Management System"} />
            <div className="leave-histroy-page-main">
                <div className="leave-history-container">
                    <div >
                        <ToastContainer className="mt-5" position="top-end">
                            <Toast
                                onClose={() => setShowAlert(false)}
                                bg={background.toLowerCase()}
                                show={showAlert}
                                className="d-inline-block m-1"
                                delay={3000}
                                autohide
                                position='top-end'
                            >
                                <Toast.Body className='text-white font-weight-bold'>
                                    {message}
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </div>

                    <div>

                        <h4 className="">Employee List</h4>

                        <div className="pb-5">
                            <ModalForm buttonLabel="Add Employee" addItemToState={addItemToState} />
                        </div>
                        <div className="card-table">
                            <div className="mt-2 mb-2 d-flex justify-content-between">
                                <div></div>
                                <div className=" ">
                                    <input type="text" className="form-control " placeholder="Search" onChange={filterData} />
                                </div>
                            </div>
                            <DataTable
                                items={items}
                                updateState={updateState}
                                deleteItemFromState={deleteItemFromState}
                            />
                        </div>
                    </div>

                    {/* <table class="table table-sm">
                        <thead>
                            <tr>
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
                                        <td>{user.id}</td>
                                        <td>{user.firstName} {user.lastName}</td>
                                        <td>{user.department}</td>
                                        <td>{user.created}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <span className="actions">
                                                <Link to="/employees/form" className="nav-link  px-2"><MdEdit /></Link>
                                                <MdDelete
                                                    className="deleteIcon"
                                                />
                                                <Link to="/employees/detail" className="nav-link  px-2"><MdOutlineVisibility /></Link>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    );
}

export default Employees;
