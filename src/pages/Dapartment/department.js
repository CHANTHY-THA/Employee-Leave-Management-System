import React, { useState, useEffect } from "react";
import "./department.css";
import ModalForm from "../../components/Department/Modal";
import DataTable from "../../components/Department/DataTable";
import jsonData from "../../data.json";
import Header from "../../components/HeaderComponent";

function Department(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      departmentName: "Human Resource",
      created: "01-Jan-2021 12:00: PM"
    }
  ]);

  const getItems = () => {
    setItems(jsonData.Departments)
    
  };

  const addItemToState = (item) => {
    setItems([...items, item]);
  };

  const updateState = (item) => {
    const itemIndex = items.findIndex((data) => data.id === item.id);
    const newArray = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
    setItems(newArray);
  };

  const deleteItemFromState = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div className="dashboard-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="dashboard-container">
          <div className="dashboard-content">
            <div>
              <h4 className="pb-2 ">Department List</h4>
              <div className="card-table">
                  <div className="mt-2 mb-2 d-flex justify-content-between">
                    <div>
                    <ModalForm  buttonLabel="Add Item" addItemToState={addItemToState}/>
                    </div>
                    <div className="d-flex ">
                      <input type="text" className="form-control" placeholder="Search" />
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

export default Department;
