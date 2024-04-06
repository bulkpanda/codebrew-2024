import { FunctionComponent, useCallback } from "react";
import CalorieY from "../components/CalorieY";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import "./NutritionAnalysis.css";

const NutritionAnalysis: FunctionComponent = () => {

  // console.log(sessionStorage.getItem('currentUserFoodList'));
  // console.log("safasfsadfasd")
  // console.log(sessionStorage.getItem('gptAnswer'));
  const navigate = useNavigate();

  const onCustomizePlanningContainerClick = useCallback(() => {
    navigate("/8-customize-planning");
  }, [navigate]);

  return (
    <div className="nutrition-analysis">
      <main className="information-bg-parent">
        <div className="information-bg" />
        <CalorieY />
        <div className="eggs-label">
          <div
            className="customize-planning"
            onClick={onCustomizePlanningContainerClick}
          >
            <h3 className="customize-planning1">
              <p className="customize-planning2">Customize planning</p>
            </h3>
            <div className="accounts-label">
              <img
                className="accounts-label-child"
                loading="lazy"
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </div>
        </div>
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default NutritionAnalysis;
