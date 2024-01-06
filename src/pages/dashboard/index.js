import React from "react";
import "./dashboard.css";
import "../../App.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="main-container-page">
        <Menu className="nav-bar" />
        <div className="main-content">
        <Header  content="Employee Leave Management System" />
        <div className="main-content-body">
          <div className="dashboard-content">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Dashboard;
