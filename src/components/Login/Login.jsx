import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import InputControl from "../InputControl";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleEmailAndPasswordLogin = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/frontpage");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <InputControl
          label="Email"
          style={{ height: "40px", borderRadius: "5px", border:"none" }}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
          placeholder="Enter Email"
        />
        <InputControl
          label="Password"
          type="password"
          style={{ height: "40px", borderRadius: "5px", border:"none" }} // Adjust the border radius as needed
          // Adjust the height as needed
           onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              pass: event.target.value,
            }))
          }
          placeholder="Enter Password"
        />
        <b>{errorMsg}</b>
        <button
          className="submit-button"
          disabled={submitButtonDisabled}
          onClick={handleEmailAndPasswordLogin}
        >
          Login with Email
        </button>
      
        <p>
          Already Have an account?{" "}
          <Link className="signup-link" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
