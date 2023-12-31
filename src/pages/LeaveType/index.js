import React from "react";
import jsonData from "../../data.json";
import "./index.css";
import Header from "../../components/HeaderComponent";

class LeaveType extends React.Component {
  
  constructor(){
    super();
    this.state = {leaveTypes : [], show: false}
  }

  componentDidMount(){
    this.GetLeaveTypeList();
  }
  GetLeaveTypeList(){
    this.setState({leaveTypes:jsonData.LeaveTypes})
  }

  render() {
    const {leaveTypes} = this.state;
    return (
      <div className="leave-page">
        <Header parentToChild={"Employee Leave Management System"} />
          <div className="page-main">
            <div className="container">
                <h4 className="pt-3 pb-2 ">Leave Type</h4>
                <div className="leave-history-content">
                {/* <div className="text_end mt-3 mb-2">
                  <input type="text" className="form-control btn-search" placeholder="Search ......" />
                </div> */}
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount (A Year)</th>
                    </tr>
                  </thead>
                  <tbody >
                  {leaveTypes.map((type) => {
                    return (
                      <tr >
                        <td>{type.id}</td>
                        <td>{type.name}</td>
                        <td>{type.amount}</td>
                      </tr>
                    );
                  })} 
                  </tbody>
                </table>
                </div>
            </div>
          </div>
    </div>)
  }
}
export default LeaveType;