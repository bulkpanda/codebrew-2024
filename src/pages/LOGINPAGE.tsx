import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LOGINPAGE.css";

const LOGINPAGE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSIGNINBUTTONClick = useCallback(() => {
    navigate("/4main-display");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);
  const onSignUpButtonClick = useCallback(() => {
    navigate("/2-sign-up-page");
  }, [navigate]);

  return (
    <div className="login-page">
      <section className="back-parent">
        <div className="back">Back</div>
        <div className="protofile-wrapper">
          <img
            className="protofile-icon"
            loading="lazy"
            alt=""
            src="/protofile@2x.png"
          />
        </div>
        <img
          className="test-account-icon"
          loading="lazy"
          alt=""
          src="/test-account@2x.png"
        />
      </section>
      <section className="login-section">
        <form className="login-form">
          <div className="form-field">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" id="emailInput" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" id="passwordInput" className="form-input" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button" onClick={onSIGNINBUTTONClick}>Login</button>
        </form>
        <div className="login-actions">
          <div className="forgot-password" onClick={onForgotPasswordClick}>Forgot password?</div>
          <div className="sign-up-link" onClick={onSignUpButtonClick}>Sign up</div>
        </div>
      </section>
    </div>
  );
};

export default LOGINPAGE;
