import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogINBUTTONContainerClick = useCallback(() => {
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
            <i className="first-name">First name</i>
            <div className="joa" />
          </div>
          <div className="last-name-parent">
            <i className="last-name">Last name</i>
            <div className="bao" />
          </div>
          <div className="email-parent">
            <i className="email1">Email</i>
            <div className="shape-with-text-container">
              <div className="shape-with-text2" />
              <div className="input-area">******</div>
            </div>
          </div>
          <div className="password-area">
            <div className="password-parent">
              <i className="password1">Password</i>
              <div className="confirm-pswd">
                <div className="shape-with-text3" />
                <div className="input-markers">******</div>
              </div>
            </div>
            <div className="re-enter-password-parent">
              <i className="re-enter-password">Re-enter Password</i>
              <div className="shape-with-text-parent1">
                <div className="shape-with-text4" />
                <div className="div3">******</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="login-button" onClick={onLogINBUTTONContainerClick}>
        <div className="sign-up2">
          <span className="create-account-text">Create Account</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
