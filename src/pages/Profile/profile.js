import React from "react";
import "./profile.css";
import Header from "../../components/HeaderComponent";
import App from "../../App";
// import Records from "../../data.json";

class Profle extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="profile-page-main">
          <div className="profile-container">
            <h3>My Profile</h3>
            <div className="profile-content">
                <div className="profile-content-left ">
                  <div className="profile-left-top">
                  <h4>Employee Info</h4>
                  <table class="table table-hover table-bordered mb-0">
                    <tbody>
                      <tr>
                        <th scope="row">Emp Email</th>
                        <td>mengheang@email.com</td>
                      </tr>
                      <tr>
                        <th scope="row">Start working Day</th>
                        <td >05 Jan 2023</td>
                      </tr>
                      <tr>
                        <th scope="row">Total leave</th>
                        <td >22</td>
                      </tr>
                      <tr>
                        <th scope="row">Total Taken leave</th>
                        <td >18</td>
                      </tr>
                      <tr>
                        <th scope="row">Total leave Remaining</th>
                        <td >4</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div className="profile-left-bottom">
                    <h4>Employee History</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                </div>
                <div className="profile-content-right">
                  <div className="profile-right-top">
                    <img src="./../../images/profile.png" ></img>
                    <h3>Mengheang PHO</h3>
                    <h6>Web Developer</h6>
                  </div>
                  <div className="profile-right-bottom">
                    <div><label>Employee ID:</label><span>WD001</span></div>
                    <div><label>Emp Gender:</label><span>Male</span></div>
                    <div><label>Emp Manager:</label><span>Mr. VengLeap</span></div>
                    <div><label>Emp Department:</label><span>Development</span></div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profle;
