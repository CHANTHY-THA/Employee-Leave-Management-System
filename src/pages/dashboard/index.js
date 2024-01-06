import React from "react";
import "./dashboard.css";
import Header from "../../components/HeaderComponent";
//import Menu from "../../components/MenuComponent";
import jsonData from "../../data.json";
class Dashboard extends React.Component {
  render() {
    const employees = jsonData.Users;
    const leaveTypes = jsonData.LeaveTypes;
    const departments = jsonData.Departments;
    const LeaveHistories = jsonData.LeaveLists.filter((item)=>item.Status==="Pending");
   // alert("employees" +employees);
    // alert("leaveTypes" +leaveTypes);
    // alert("departments" +departments);
   console.log("LeaveHistories" +LeaveHistories);
    return (
      <div className="dashboard-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="dashboard-container">
          {/* <Menu /> */}
          <div className="dashboard-content">
          <div>
              <div className="row ">
                <div className="col-4">
                    <div className="card text-bg-secondary  mb-3" >
                        <div className="card-body">
                            <h5>Total Employees</h5>
                            <h5>{employees.length}</h5>   
                        </div>
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-bg-secondary  mb-3" >
                        <div className="card-body">
                            <h5>Total Departments</h5>
                            <h5>{departments.length}</h5>   
                        </div>  
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-bg-secondary mb-3 ">
                        <div className="card-body">
                            <h5>Total Leave Types</h5>
                            <h5>{leaveTypes.length}</h5>   
                        </div> 
                    </div>
                </div>
                
              </div>
              <div className="card_table">
                  <h4 className="pt-3 pb-2">Pending Leave</h4>
                  <table className="table table-bordered">
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
                    {LeaveHistories.map((ele) => {
                      // let textColor = "";
                      // if(ele.Status === "Pending"){
                      //     textColor = "fw-bold text-warning"
                      // }else if(ele.Status === "Rejected"){
                      //   textColor = "fw-bold text-danger"
                      // }else{
                      //   textColor = "fw-bold text-success"
                      // }
                      return (
                        <tr >
                          <td>{ele.id}</td>
                          <td>{ele.EmployeeName}</td>
                          <td>{ele.LeaveType}</td>
                          <td>{ele.Created}</td>
                          <td className="fw-bold text-warning">{ele.Status}
                          
                          </td>
                          <td>
                            <div type="button" className="btn btn-primary btn-sm">View Detail</div>
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
}

export default Dashboard;
