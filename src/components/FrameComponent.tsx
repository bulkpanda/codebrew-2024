import { FunctionComponent } from "react";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className="athletescontainer">
      <div className="vegetarianlabel">
        <img
          className="vegetarian-icon"
          loading="lazy"
          alt=""
          src="/vegetarian@2x.png"
        />
        <div className="dietaryrestrictedlabel">
          <i className="vegetarian">Vegetarian</i>
        </div>
      </div>
      <div className="dietary-restricted-parent">
        <img
          className="dietary-restricted-icon"
          loading="lazy"
          alt=""
          src="/dietaryrestricted@2x.png"
        />
        <i className="dietary-restricted">Dietary-restricted</i>
      </div>
      <div className="athletes-special">
        <div className="athletes-wrapper">
          <img
            className="athletes-icon"
            loading="lazy"
            alt=""
            src="/athletes@2x.png"
          />
        </div>
        <i className="athletes">Athletes</i>
      </div>
      <div className="athletes-special1">
        <div className="special-wrapper">
          <img
            className="special-icon"
            loading="lazy"
            alt=""
            src="/special@2x.png"
          />
        </div>
        <i className="special">Special</i>
      </div>
    </footer>
  );
};

export default FrameComponent;
