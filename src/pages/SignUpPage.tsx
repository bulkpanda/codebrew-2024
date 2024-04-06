import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/3-login-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <div className="back1">Back</div>
      <section className="sign-up-page-inner">
        <div className="sign-up-label-parent">
          <div className="sign-up-label">
            <h1 className="sign-up1">Sign Up</h1>
          </div>
          <div className="first-name-parent">
            <i className="field-label">First name</i>
            <input type="name" id="nameInput" className="form-input" placeholder="Enter your first name" />
          </div>
          <div className="last-name-parent">
            <i className="field-label">Last name</i>
            <input type="name" id="nameInput" className="form-input" placeholder="Enter your last name" />
          </div>
          <div className="email-parent">
            <i className="field-label">Email</i>
            <input type="email" id="emailInput" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="password-area">
            <div className="password-parent">
              <i className="field-label">Password</i>
              <input type="password" id="passwordInput" className="form-input" placeholder="Enter your password" />
            </div>
            <div className="re-enter-password-parent">
              <i className="field-label">Confirm Password</i>
              <input type="password" id="passwordInput" className="form-input" placeholder="Re-enter your password" />
            </div>
          </div>
        </div>
      </section>
      <button type="submit" className="login-button" onClick={onSignUpButtonClick}>Create Account</button>
    </div>
  );
};

export default SignUpPage;
