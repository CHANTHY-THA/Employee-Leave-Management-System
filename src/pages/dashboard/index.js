import React from "react";
import "./dashboard.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
import jsonData from "../../data.json";
class Dashboard extends React.Component {
  render() {
    console.log(jsonData);
    return (
      <div className="dashboard-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="dashboard-container">
          {/* <Menu /> */}
          <div className="dashboard-content">
            <table class="table table-sm">
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
