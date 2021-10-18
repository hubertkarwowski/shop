import React from "react";

import "./signinAndSignout.scss";

import Signin from "../../components/signin/Signin";
import SignUp from "../../components/Signup/Signup";

function signinAndSignout() {
  return (
    <div className="sign-in-and-sign-out">
      <Signin />
      <SignUp />
    </div>
  );
}

export default signinAndSignout;
