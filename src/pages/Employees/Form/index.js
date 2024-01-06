import React from "react";
import "./style.css";
import Header from "../../../components/HeaderComponent";
import Menu from "../../../components/MenuComponent";
import App from "../../../App";

class EmployeeForm extends React.Component {
    render() {
        return (
            <div className="leave-detail-page">
                <Header parentToChild={"Employee Leave Management System"} />
                <div className="leave-detail-page-main">
                    {/* <Menu/> */}
                    <div className="leave-detail-container">
                        <h3>Employee Details {App.EmploymeeDetail}</h3>
                        <div className="leave-detail-content">
                            <div className="detail-row">
                                <div className="detail-col">
                                    <label>Emp Name:</label>
                                    <span>Mengheang PHO</span>
                                </div>

                                <div className="detail-col">
                                    <label>Gender:</label>
                                    <span>Male</span>
                                </div>
                                <div className="detail-col">
                                    <label>Date of Birth:</label>
                                    <span>15 July, 1999</span>
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-col">
                                    <label>First name:</label>
                                    <span>Mengheang</span>
                                </div>
                                <div className="detail-col">
                                    <label>Last Name:</label>
                                    <span>Pho</span>
                                </div>
                                <div className="detail-col">
                                    <label>Department:</label>
                                    <span>Information Technology</span>
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-col">
                                    <label>Emp Email:</label>
                                    <span>mengheangpho@gmail.com</span>
                                </div>
                                <div className="detail-col">
                                    <label>Emp contact number:</label>
                                    <span>012345678</span>
                                </div>
                                <div className="detail-col">
                                    <label>Country:</label>
                                    <span>Cambodia</span>
                                </div>
                            </div>

                            {/* <div className="detail-row">
                                 

                            </div> */}
                            <div className="detail-row">
                                <div className="detail-col">
                                    <label>City:</label>
                                    <span>Phnom Penh</span>
                                </div>
                                <div className="detail-col">
                                    <label>Address:</label>
                                    <span >Sen Sok</span>
                                </div>
                                <div className="detail-col">
                                    <label>Action:</label>
                                    <button id="approved">Update</button>
                                </div>
                            </div>
                            {/* <div className="detail-row">
                                <div className="detail-col">

                                </div>
                                <div className="detail-col">
                                </div>
                                <div className="detail-col">
                                </div>
                            </div> */}
                            {/* <div className="detail-row">
                                <div className="detail-col">
                                    <label>Admin Action taken date:</label>
                                    <span>29 Feb 2024 </span>
                                </div>
                                <div className="detail-col">
                                </div>
                                <div className="detail-col">
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EmploymeeDetail;
