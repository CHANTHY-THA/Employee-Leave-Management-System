import React from "react";
import jsonData from "../../data.json";
import "./index.css";

class LeaveType extends React.Component {
  
  constructor(){
    super();
    this.state = {leaveTypes : [], show: false}
  }

  componentDidMount(){
    this.GetLeaveTypeList();
  }
  GetLeaveTypeList(){
    this.setState({leaveTypes:jsonData.leaveType})
  }

  render() {
    const {leaveTypes} = this.state;
    return (
      <div >
        {
          <div class="mt-4">
            <div className="card-table">
                <h4 class="pt-3 pb-2 ">Leave Type List</h4>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th >ID</th>
                      <th >Name</th>
                      <th >Amount</th>
                    </tr>
                  </thead>
                  <tbody >
                  {leaveTypes.map((ele) => {
                    return (
                      <tr >
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.amount}</td>
                      </tr>
                    );
                  })} 
                  </tbody>
                </table>
            </div>
        </div>
        }
        
    </div>)
  }
}
export default LeaveType;