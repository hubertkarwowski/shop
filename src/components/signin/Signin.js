import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./Signin.scss";

import {
  googleSignInStart,
  facebookSignInStart,
  twitterSignInStart,
  githubSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const Signin = ({
  emailSignInStart,
  googleSignInStart,
  facebookSignInStart,
  twitterSignInStart,
  githubSignInStart,
}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
        <div className="buttons">
          <CustomButton
            type="button"
            onClick={facebookSignInStart}
            isFacebookSignIn
          >
            FACEBOOK SIGN IN
          </CustomButton>
          <CustomButton
            type="button"
            onClick={githubSignInStart}
            isGithubSignIn
          >
            GITHUB SIGN IN
          </CustomButton>
        </div>
        <div className="buttons">
          <CustomButton
            type="button"
            onClick={twitterSignInStart}
            isTwitterSignIn
          >
            TWITTER SIGN IN
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  twitterSignInStart: () => dispatch(twitterSignInStart()),
  githubSignInStart: () => dispatch(githubSignInStart()),
  emailSignInStart: () => dispatch(emailSignInStart()),
});

export default connect(null, mapDispatchToProps)(Signin);
