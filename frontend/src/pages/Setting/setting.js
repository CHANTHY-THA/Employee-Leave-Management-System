import React, { useEffect, useState } from "react";
import Header from "../../components/HeaderComponent";
import { Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";
import DataTable from "../../components/SettingComponent/DataTable";
import ModalForm from "../../components/SettingComponent/Modal";

function Setting(props) {

    const [items, setItems] = useState([{}]);
    const [showAlert, setShowAlert] = useState(false);
    const [background, setBackground] = useState("");
    const [message, setMessage] = useState("");
    const getItems = () => {
  
      axios.get(process.env.REACT_APP_URL + "/department", { validateStatus: () => true }).then(res => {
        // console.log("data: " + res.data.data);
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

    return (<div>
        <div className="dashboard-page">
          <Header parentToChild={"Employee Leave Management System"} />
          <div className="department-main">
            <div className="department-container">
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
  
                <h4 className="">Pre data List</h4>
  
                <div className="pb-5">
                  <ModalForm buttonLabel="Add Pre Data" addItemToState={addItemToState} />
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
            </div>
          </div>
        </div>
      </div>
    );
}

export default Setting;