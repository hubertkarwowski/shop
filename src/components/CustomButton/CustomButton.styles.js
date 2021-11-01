import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: none;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const githubSignInStyles = css`
  background-color: #24292e;
  border: none;
  color: white;
  &:hover {
    background-color: #2f363c;
    border: none;
  }
`;

const facebookSignInStyles = css`
  background-color: #1877f2;
  border: none;
  color: white;
  &:hover {
    background-color: #3085f3;
    border: none;
  }
`;

const twitterSignInStyles = css`
  background-color: rgb(29, 155, 240);
  border: none;
  color: white;
  &:hover {
    background-color: rgb(26, 140, 216);
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  if (props.isGithubSignIn) {
    return githubSignInStyles;
  }
  if (props.isFacebookSignIn) {
    return facebookSignInStyles;
  }
  if (props.isTwitterSignIn) {
    return twitterSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
