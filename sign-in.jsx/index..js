import React, { useState } from "react";
import axios from "axios";
import WruSubcriptionAuth from "../../assets/images/wru-subscription-auth";
import { BASE_URL } from "../../common/constants";
import "../authentication.css";

const SignInButtons = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignIn = () => {
    const responseData = {
      identifier: email,
      password: password,
    };
    axios
      .post(BASE_URL, responseData)
      .then((response) => {
        if (response.statusText === "OK") {
          setSuccessMessage("User logged in successfully");
        }
      })
      .catch((error) => {
        if (error.response.statusText === "Bad Request") {
          setErrorMessage("Something went wrong. Please try again");
        }
      });
  };

  return (
    <div className="sign-in-buttons-container input-fields-container">
      <input
        className="input-fields"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        className="input-fields"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <div className="remember-me-container">
        <div className="checkbox-wrapper">
          <input
            className="checkbox"
            type="checkbox"
            value="conditions-checkbox"
          />
          <label className="checkbox-label">Remember me</label>
        </div>
        <button type="button" className="submit-button" onClick={handleSignIn}>
          SIGN IN
        </button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="subscriprion-container">
      <div className="subscription-image">
        <WruSubcriptionAuth />
      </div>
      <div className="welcome-page-container">
        <div className="welcome-text1">Welcome !</div>
        <div className="welcome-text2">Login to Continue</div>
        <SignInButtons />
        <div className="or-text register-page-or-text">or</div>
        <div className="sign-in-container">
          <button
            className="login-button"
            onClick={() => {
              alert("social login integration pending");
            }}
          >
            Sign in with social media{" "}
          </button>
        </div>
        <div className="terms-and-conditions">
          By clicking the button above, you agree to the terms of use and
          privacy policies
        </div>
      </div>
    </div>
  );
};

export default SignIn;
