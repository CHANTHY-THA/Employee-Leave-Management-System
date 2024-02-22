import React, { useEffect, useState } from "react";
import "./leaveManagement.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
import DataTable from "../../components/LeaveManagement/DataTable";
import { Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

function LeaveManagement(props) {
  const [items, setItems] = useState([{}]);
  const [showAlert, setShowAlert] = useState(false);
  const [background, setBackground] = useState("");
  const [message, setMessage] = useState("");

  const getItems = () => {
    axios.get(process.env.REACT_APP_URL + "/leave/all", { validateStatus: () => true }).then(res => {
      // console.log("data: " + res.data.data);
      setItems(res.data.data)
    });
    // setItems(jsonData.Departments)

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
      // const data = items.filter(dep =>
      //   dep.departmentName.toLowerCase().includes(value.toLowerCase())
      // );
      // setItems(data);
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
            <h4>LEAVE HISTORY {App.LeaveManagement}</h4>
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
  );
}

export default LeaveManagement;
