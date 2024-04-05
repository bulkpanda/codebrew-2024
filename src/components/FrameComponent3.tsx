import { FunctionComponent } from "react";
import Share from "./Share";
import "./FrameComponent3.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <footer className="frame-footer">
      <div className="male-user-parent">
        <img
          className="male-user-icon"
          loading="lazy"
          alt=""
          src="/male-user@2x.png"
        />
        <div className="share">
        <img className="share-icon" loading="lazy" alt="" src="/share@2x.png" />
        </div>
        <img
          className="settings-icon"
          loading="lazy"
          alt=""
          src="/settings@2x.png"
        />
      </div>
      <div className="frame-wrapper1">
        <div className="frame-parent2">
          <div className="accounts-wrapper">
            <i className="accounts">Accounts</i>
          </div>
          <div className="sharing-wrapper">
            <i className="sharing">Sharing</i>
          </div>
          <i className="settings">Settings</i>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent3;
