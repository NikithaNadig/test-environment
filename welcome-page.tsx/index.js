import React from "react";
import { useNavigate } from "react-router-dom";
import WruSubcriptionAuth from "../../assets/images/wru-subscription-auth";
import GoogleIcon from "../../assets/images/google-icon";
import FacebookIcon from "../../assets/images/facebook-icon";
import "../authentication.css";

const WelcomePage = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate("/register");
    }

    const navigateSignIn = () => {
        navigate("/sign-in");
    }

    return(
        <div className="subscriprion-container">
            <div className="subscription-image"><WruSubcriptionAuth /></div>
            <div className="welcome-page-container">
                <div className="welcome-text1">Welcome !</div>
                <div className="welcome-text2">Let's Get Started</div>               
                 <SocialLoginButtons/>
                 <div>
                <div className="or-text">or</div>
                </div>
                <div className="sign-in-container">
                    <button onClick={navigateRegister} className="login-button">Register with new user</button>
                    <button onClick={navigateSignIn} className="login-button">Sign In with existing user</button>
                </div>
                <div className="terms-and-conditions">By clicking the button above, you agree to the terms of use and privacy policies</div>
            </div>
        </div>
    )
}

const SocialLoginButtons = () => {
    // const navigate = useNavigate();

    // const navigateSocialLogin = () => {
    //     navigate("http://localhost:1337/connect/facebook");
    // }
    
    return(
        <div className="sign-in-buttons-container">
             <button onClick={()=>{}} className="social-login-buttons google-sign-in"><div className="button-text-wrapper"><GoogleIcon />Sign In with Google</div></button>
             <button onClick={()=>{}} className="social-login-buttons facebook-sign-in"><div className="button-text-wrapper"><FacebookIcon />Continue with Facebook</div></button>
        </div>
    )
}

export default WelcomePage; 
