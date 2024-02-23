import React, { useEffect, useState } from "react";
import "./leaveDetail.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Button } from "react-bootstrap";
import FormReject from "../../components/LeaveDetailComponent/FormReject";
import FormApprove from "../../components/LeaveDetailComponent/FormApprove";
import { Toast, ToastContainer } from "react-bootstrap";

function LeaveDetail(props) {
  const param = useParams();
  const id = param.id;

  const [showAlert, setShowAlert] = useState(false);
  const [background, setBackground] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  let [leave, setLeave] = useState([{}]);

  const getLeaveById = () => {
    axios.post(process.env.REACT_APP_URL + '/leave/' + id, {}, { headers: headers }, { validateStatus: () => true })
      .then(res => {
        // console.log(res.data.result);
        setLeave(res.data.result)
      })
  }

  const rejectLeaveFormState = (result) => {
    if (result.id > 0) {
      getLeaveById();
      setBackground("Success");
    } else {
      setBackground("Danger");
    }
    setShowAlert(true);
    setMessage(result.message);
  };

  const confirmApproveLeave = (result) => {
    if (result.id > 0) {
      getLeaveById();
      setBackground("Success");
    } else {
      setBackground("Danger");
    }
    setShowAlert(true);
    setMessage(result.message);
  };

  useEffect(() => {
    getLeaveById();
  }, []);

  return (
    <div className="leave-detail-page">
      <Header parentToChild={"Employee Leave Management System"} />
      <div className="leave-detail-page-main">
        {/* <Menu/> */}
        <div className="leave-detail-container">

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

          <h3>Leave Details {App.LeaveDetail}</h3>
          <div className="leave-detail-content">
            <div className="detail-row">
              <div className="detail-col">
                <label>Emp Name:</label>
                <span>
                  {leave.employee ? leave.employee.firstname + " " : ""}
                  {leave.employee ? leave.employee.lastname : ""}
                </span>
              </div>
              <div className="detail-col">
                <label>Emp ID:</label>
                <span>{leave.id}</span>
                {/* <span>PNC0014</span> */}
              </div>
              <div className="detail-col">
                <label>Gender:</label>
                <span>{leave.employee ? leave.employee.gender : ""}</span>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-col">
                <label>Emp Email:</label>
                <span>{leave.employee ? leave.employee.email : ""}</span>
              </div>
              <div className="detail-col">
                <label>Emp contact number:</label>
                <span>{leave.employee ? leave.employee.phonenumber : ""}</span>
              </div>
              <div className="detail-col">
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-col">
                <label>Leave type:</label>
                <span>{leave.leavetype ? leave.leavetype.name : ""}</span>
              </div>
              <div className="detail-col">
                <label>Leave start date:</label>
                <span>{leave.fromDate}</span>
              </div>
              <div className="detail-col">
                <label>Leave end date:</label>
                <span>{leave.toDate}</span>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-col-des">
                <label>Emp leave reason:</label>
                <span>{leave.reason}</span>
              </div>

            </div>
            <div className="detail-row">
              <div className="detail-col">
                <label>Leave status:</label>
                {(() => {
                  if (leave.leaveStatus == "Pending") {
                    return <span className="label label-pending">
                      {leave.leaveStatus}
                    </span>

                  } else if (leave.leaveStatus == "Approved") {
                    return <span className="label label-approved">
                      {leave.leaveStatus}
                    </span>

                  } else if (leave.leaveStatus == "Not Approve") {
                    return <span className="label label-not-approved">
                      {leave.leaveStatus}
                    </span>
                  }
                })()}

              </div>
              <div className="detail-col">
              </div>
              <div className="detail-col">
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-col">
                <label>Admin remark:</label>
                {(() => {
                  if (leave.leaveStatus == "Approved") {
                    return <span className="label label-approved">
                      {leave.leaveStatus}
                    </span>
                  }
                })()}
              </div>
              <div className="detail-col">
              </div>
              <div className="detail-col">
              </div>
            </div>
            <div className="detail-row">
              <div className="detail-col">
                <label>Admin Action taken date:</label>
                <span>{leave.approveDate}</span>
              </div>
              <div className="detail-col">
              </div>
              <div className="detail-col" style={{ display: "flex", justifyContent: "end" }}>
                <FormApprove item={leave} confirmApproveLeave={confirmApproveLeave}>Approve</FormApprove>
                <FormReject item={leave} rejectLeaveFormState={rejectLeaveFormState}>Reject</FormReject>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


export default LeaveDetail;
