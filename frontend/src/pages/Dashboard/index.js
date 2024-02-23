import { React, useEffect, useState } from "react";
import "./dashboard.css";
import Header from "../../components/HeaderComponent";
//import Menu from "../../components/MenuComponent";
// import jsonData from "../../data.json";
import { Button } from "react-bootstrap";
// import { MdOutlineVisibility } from "react-icons/md";
import axios from "axios";
import { Link } from 'react-router-dom';


function Dashboard() {
  let [departments, setdepartment] = useState([{}]);
  let [leaveTypes, setLeaveType] = useState([{}]);
  let [employees, setEmployee] = useState([{}]);
  let [leaves, setLeave] = useState([{}]);
  let [pendingLeaves, setPendingLeaves] = useState([]);
  useEffect(() => {
    getAllDepartment();
    getAllEmployee();
    getAllLeaveType();
    getAllLeaves();

  }, []);

  const token = localStorage.getItem("token");
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const getAllDepartment = () => {
    axios.get(process.env.REACT_APP_URL + "/department", { headers: headers }, { validateStatus: () => true }).then(res => {
      setdepartment(res.data.data);
    });
  };
  const getAllEmployee = () => {
    axios.get(process.env.REACT_APP_URL + "/user/all", { headers: headers }, { validateStatus: () => true }).then(res => {
      setEmployee(res.data.data);
    });
  };
  const getAllLeaveType = () => {
    axios.get(process.env.REACT_APP_URL + "/leavetype/all", { headers: headers }, { validateStatus: () => true }).then(res => {
      setLeaveType(res.data.data);
    });
  };
  const getAllLeaves = () => {
    axios.get(process.env.REACT_APP_URL + "/leave/all", { headers: headers }, { validateStatus: () => true }).then(res => {
      console.log("🚀 ~ axios.get ~ res.data.data:", res.data.data)
      const response = res.data.data
      setLeave(response);
      const PeadingLeaves = response.filter((item) => item.leaveStatus === "Pending");
      console.log("🚀 ~ axios.get ~ leaves:", leaves)
      setPendingLeaves(PeadingLeaves)

    });
  };
  return (
    <div className="dashboard-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div className="dashboard-container">
        {/* <Menu /> */}
        <div className="dashboard-content">
          <div>
            <div className="row ">
              <div className="col-4">
                <div className="card bg-secondary text-white mb-3" >
                  <div className="card-body">
                    <h5>Total Employees</h5>
                    <h5>{employees.length}</h5>
                  </div>

                </div>
              </div>
              <div className="col-4">
                <div className="card bg-secondary text-white  mb-3" >
                  <div className="card-body">
                    <h5>Total Departments</h5>
                    <h5>{departments.length}</h5>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card bg-secondary text-white mb-3 ">
                  <div className="card-body">
                    <h5>Total Leave Types</h5>
                    <h5>{leaveTypes.length}</h5>
                  </div>
                </div>
              </div>

            </div>
            <div className="card_table">
              <div className="mb-4">
                <h4 className="pt-3">Pending Leave</h4>
                <hr></hr>
              </div>

              <table className="table table-sm">
                <thead>
                  <tr>
                    <th >ID</th>
                    <th >Employee Name</th>
                    <th >Leave Type</th>
                    <th >Created</th>
                    <th >Status</th>
                    <th >Action</th>
                  </tr>
                </thead>

                <tbody >
                  {pendingLeaves.map((ele) => {
                    console.log("🚀 ~ {PeadingLeaves.map ~ ele:", ele)
                    // let textColor = "";
                    // if(ele.Status === "Pending"){
                    //     textColor = "fw-bold text-warning"
                    // }else if(ele.Status === "Rejected"){
                    //   textColor = "fw-bold text-danger"
                    // }else{
                    //   textColor = "fw-bold text-success"
                    // }
                    return (
                      <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.employee.firstname} {ele.employee.lastname}</td>
                        <td>{ele.leavetype.name}</td>
                        <td>{ele.created}</td>
                        <td >
                          <span className="label label-pending">
                            {ele.leaveStatus}
                          </span>
                        </td>
                        <td>
                          {/* <MdOutlineVisibility /> */}
                          <Link to={{ pathname: `/leave-detail/${ele.id}` }}>
                            <Button>Details</Button>
                          </Link>
                          {/* <div type="button" className="btn btn-primary btn-sm">View Detail</div> */}
                          {/* <Button href="/leave-detail">View Detail</Button> */}
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
    </div>
  );
}


export default Dashboard;
