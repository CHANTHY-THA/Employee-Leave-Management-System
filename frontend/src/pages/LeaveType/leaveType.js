import React, { useState, useEffect } from "react";
import "./leaveType.css";
import { Toast, ToastContainer } from "react-bootstrap";
import Header from "../../components/HeaderComponent";
import axios from 'axios';
import ModalForm from "../../components/LeaveTypeComponent/Modal";
import DataTable from "../../components/LeaveTypeComponent/DataTable";

function LeaveType(props) {
  const [items, setItems] = useState([{}]);
  const [showAlert, setShowAlert] = useState(false);
  const [background, setBackground] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } }
  const getItems = () => {

    axios.get(process.env.REACT_APP_URL + "/leavetype/all", headers, { validateStatus: () => true }).then(res => {
      // console.log("data: ", res.data.data);
      setItems(res.data.data)
    });
    // setItems(jsonData.Departments)
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
        dep.name.toLowerCase().includes(value.toLowerCase())
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
    <div>
      <div className="leave-type-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-type-main">
          <div className="leave-type-container">
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
              <h4 className="">Leave Type List</h4>
              <div className="pb-5">
                <ModalForm buttonLabel="Add Leave Type" addItemToState={addItemToState} />
              </div>
              <div className="card-table">
                <div className="mt-2 mb-2 d-flex justify-content-between">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveType;
