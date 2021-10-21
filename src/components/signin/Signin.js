import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./Signin.scss";
import {
  auth,
  signInWithGoogle,
  singinWithFb,
  singinWithGH,
  singinWithTwitter,
} from "../../firebase/firebase-utils";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
          <div className="buttons">
            <CustomButton onClick={singinWithFb}>FACEBOOK SIGN IN</CustomButton>
            <CustomButton onClick={singinWithGH}>GITHUB SIGN IN</CustomButton>
          </div>
          <div className="buttons">
            <CustomButton onClick={singinWithTwitter}>
              TWITTER SIGN IN
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
