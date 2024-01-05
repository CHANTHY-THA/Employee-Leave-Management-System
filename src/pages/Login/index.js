import { React,useState} from "react";
import "./login.css";
import Header from "../../components/HeaderComponent";
import JSONData from "../../data.json";

const Login = () =>{
  const [formData, setFormData] = useState({
    user:'',
    password:'',
  });
  const handleLogin = (e) =>{
    e.preventDefault()

    let mssError = document.querySelector('span');
    let isLogin = false;
    if(formData.user ==="" && formData.password ===""){
      mssError.style.color = "red";
    }
    else{
      for(let user of JSONData.Users){
        if(user.userName === formData.user && user.password === formData.password ){
          isLogin = true
        }
      }
      if(isLogin){
        mssError.style.color = "green";
        mssError.textContent = "your user is successfully Logged in!"
        window.location.replace("/dashboard")
      }
      else{
        mssError.style.color = "red";
        mssError.textContent = "You entered the wrong username or password!"
      }
    }
  }
  return (
      <div >
        <Header parentToChild={"Admin Login  |  Employee Login"}/>
        <div className="login-container">
          <div>
            <h3>Welcome to ELMS</h3>
            <form onSubmit={handleLogin}>
   
              <div>
                <div className="txt_field">
                  <label>Username</label>
                  <input type="text"  onChange={(e) => setFormData({...formData, user: e.target.value})}   />
                </div>
                <div className="txt_field">
                  <label>Password</label>
                  <input type="password" onChange={(e) => setFormData({...formData,password: e.target.value})}  />
                  <span>All the inputs in form are required!</span>
            
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
