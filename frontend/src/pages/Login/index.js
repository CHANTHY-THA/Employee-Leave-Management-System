import { React, useState } from "react";
import "./login.css";
import Header from "../../components/HeaderComponent";
// import JSONData from "../../data.json";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  });
  const handleLogin = (e) => {
    e.preventDefault();

    let mssError = document.getElementById('errorMss');
    let isLogin = false;
    let isAdmin = false

    if (formData.user === "" && formData.password === "") {
      mssError.style.color = "red";
    }
    else {
      const auth = {
        username: formData.user,
        password: formData.password

      }
      axios.post(process.env.REACT_APP_URL + '/auth/login', auth, { validateStatus: () => true }).then((res) => {

        if (res.data.statusCode !== 200) {
          mssError.style.color = "red";
          mssError.textContent = res.data.message
        } else {
          isLogin = true;
          if (res.data.result.data.role === "admin") {
            isAdmin = true
          }
          if (isLogin) {
            mssError.style.color = "green";
            mssError.textContent = res.data.message
            localStorage.setItem("token", res.data.result.token);
            localStorage.setItem("userID", res.data.result.data.id);
            localStorage.setItem("username", res.data.result.data.username);
            if (isAdmin) {
              window.location.replace("/dashboard")
            }
            else {
              window.location.replace("/my-leave")
            }
          }
        }
      })

    }
  }
  return (
    <div >
      <Header parentToChild={"Admin Login  |  Employee Login"} />
      <div className="login-container">
        <div>
          <h3>Welcome to ELMS</h3>
          <form onSubmit={handleLogin}>

            <div>
              <div className="txt_field">
                <label>Username</label>
                <input type="text" onChange={(e) => setFormData({ ...formData, user: e.target.value })} />
              </div>
              <div className="txt_field">
                <label>Password</label>
                <input type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <span id="errorMss">Are the inputs in form are required!</span>

              </div>
              <div className="form-btn">
                <span className="pass"><a href="#">Forgot Password?</a></span>
                <input type="submit" value="Login" />
              </div>
              <div className="form-btn">
                <span className="signup_link">Not a member?</span>
                <a href="#">Signup</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;
