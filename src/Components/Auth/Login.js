import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessages, setValidationMessages] = useState({
    username: "",
    password: "",
  });


  const validateForm = () => {
    let isValid = true;
    const newValidationMessages = { username: "", password: "" };

    if (!username) {
      newValidationMessages.username = "Username is required";
      isValid = false;
    }

    if (!password) {
      newValidationMessages.password = "Password is required";
      isValid = false;
    }

    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm() && username === "user@gmail.com" && password === "Power@1234") {
      window.location.href = "/dashboard";
    }

    if(validateForm() && username !== "user@gmail.com" && password !== "Power@1234"){
        alert('Invalid Crendentials');
    }
  };

  return (
    <div className="containerss" id="Apps">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Login In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className={`form-control ${validationMessages.username && "is-invalid"}`}
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setValidationMessages((prevMessages) => ({
                      ...prevMessages,
                      username: "",
                    }));
                  }}
                />
                {validationMessages.username && (
                  <div className="invalid-feedback">{validationMessages.username}</div>
                )}
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className={`form-control ${validationMessages.password && "is-invalid"}`}
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValidationMessages((prevMessages) => ({
                      ...prevMessages,
                      password: "",
                    }));
                  }}
                />
                {validationMessages.password && (
                  <div className="invalid-feedback">{validationMessages.password}</div>
                )}
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me in
              </div>
              <br />
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="/">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="/">Forgot your password?</a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
