import React from "react";

import "./signinAndSignout.scss";

import Signin from "../../components/signin/Signin";
import SignUp from "../../components/Signup/Signup";

const SigninAndSignout = () => {
  return (
    <div className="sign-in-and-sign-out">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninAndSignout;
