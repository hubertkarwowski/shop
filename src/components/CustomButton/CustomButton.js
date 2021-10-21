import React from "react";
import "./CustomButton.scss";
function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <div>
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
