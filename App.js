import React from "react";
import { MemoryRouter , Routes, Route } from "react-router-dom";
import Register from "../src/components/authentication/register.jsx/index";
import WelcomePage from "../src/components/authentication/welcome-page.tsx/index";
import SignIn from "../src/components/authentication/sign-in.jsx/index.";
// import SocialLogin from "./components/authentication/social-login.jsx";

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/sign-in" element={<SignIn />}/>
        {/* <Route  path="/auth/callback/facebook" element={<SocialLogin/>}/> */}
      </Routes>
    </MemoryRouter>
  );
};

export default App;