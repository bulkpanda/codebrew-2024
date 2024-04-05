import { FunctionComponent } from "react";
import "./FrameComponent2.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="uploading-files-inner">
      <div className="hi-joa-parent">
        <header className="hi-joa">
          <h1 className="hi-joa1">{`Hi, Joa! `}</h1>
          <img
            className="smile-image-icon"
            loading="lazy"
            alt=""
            src="/smile-image@2x.png"
          />
        </header>
        <b className="what-would-you">what would you like to eat today?</b>
      </div>
    </div>
  );
};

export default FrameComponent2;
