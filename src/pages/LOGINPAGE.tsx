import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LOGINPAGE.css";

const LOGINPAGE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSIGNINBUTTONClick = useCallback(() => {
    navigate("/4main-display");
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
      <section className="login-page-inner">
        <div className="frame-group">
          <div className="frame-div">
            <div className="email-wrapper">
              <i className="email">Email</i>
            </div>
            <div className="shape-with-text-parent">
              <div className="shape-with-text" />
              <div className="sign-up-button">******</div>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="password-wrapper">
              <i className="password">Password</i>
            </div>
            <div className="shape-with-text-group">
              <div className="shape-with-text1" />
              <div className="div2">******</div>
            </div>
          </div>
          <div className="sign-in-button-wrapper">
            <div className="sign-in-button" onClick={onSIGNINBUTTONClick}>
              <div className="sign-in">
                <span className="sign-in-text">Login</span> 
              </div>
            </div>
          </div>
          <div className="forgot-password-parent">
            <div className="forgot-password">Forgot password</div>
            <div className="sign-up-button1" onClick={onSignUpButtonClick}>
              <div className="sign-up">Sign up</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LOGINPAGE;
