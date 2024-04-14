import React, { useState } from "react";
import InputControl from "../InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../../firebase";
import "./Signup.css"; 

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    if (!isValidEmail(values.email)) {
      setErrorMsg("Enter a valid email address");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Signup</h1>
          <InputControl
            label="Name"
                      style={{ height: "40px", borderRadius: "5px", border:"none" }}

            placeholder="Enter Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />

          <InputControl
            label="Email"
                      style={{ height: "40px", borderRadius: "5px", border:"none" }}

            placeholder="Enter Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Password"
            style={{ height: "40px", borderRadius: "5px", border:"none" }}

            placeholder="Enter Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <b>{errorMsg}</b>
          <button
            className="submit-button"
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Signup with Email
          </button>
        
          <p>
            Already Have an account ?{" "}
            <Link className="login-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
