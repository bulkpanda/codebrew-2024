import { FunctionComponent } from "react";
import "./FrameComponent1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-wrapper2">
      <div className="fruits-vegetables-meats-parent">
        <div className="fruits-vegetables-meats">
          <div className="strawberrycereals">
            <img
              className="strawberry-icon"
              loading="lazy"
              alt=""
              src="/strawberry@2x.png"
            />
          </div>
          <i className="fruits">Fruits</i>
        </div>
        <div className="fruits-vegetables-meats1">
          <img
            className="vegetables-icon"
            loading="lazy"
            alt=""
            src="/vegetables@2x.png"
          />
          <i className="vegetables">Vegetables</i>
        </div>
        <div className="fruits-vegetables-meats2">
          <img
            className="meats-icon"
            loading="lazy"
            alt=""
            src="/meats@2x.png"
          />
          <i className="meats">Meats</i>
        </div>
        <div className="fruits-vegetables-meats3">
          <div className="cereals-wrapper">
            <img
              className="cereals-icon"
              loading="lazy"
              alt=""
              src="/cereals@2x.png"
            />
          </div>
          <i className="cereals">Cereals</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
