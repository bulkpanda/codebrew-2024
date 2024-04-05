import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainDisplay.css";

const MainDisplay: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSquareBorderImageClick = useCallback(() => {
    navigate("/5-uploading-files");
  }, [navigate]);

  const onLeaderboardImageClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onPeopleImageClick = useCallback(() => {
    navigate("/social");
  }, [navigate]);

  return (
    <div className="main-display">
      <footer className="square-border-parent">
        <img
          className="square-border-icon"
          loading="lazy"
          alt=""
          src="/square-border@2x.png"
          onClick={onSquareBorderImageClick}
        />
        <img
          className="leaderboard-icon"
          loading="lazy"
          alt=""
          src="/leaderboard@2x.png"
          onClick={onLeaderboardImageClick}
        />
        <img
          className="people-icon"
          loading="lazy"
          alt=""
          src="/people@2x.png"
          onClick={onPeopleImageClick}
        />
        <img
          className="combo-chart-icon"
          loading="lazy"
          alt=""
          src="/combo-chart@2x.png"
        />
      </footer>
      <section className="data-chart-parent">
        <header className="data-chart">
          <div className="valor-parent">
            <img
              className="valor-icon"
              loading="lazy"
              alt=""
              src="/valor@2x.png"
            />
            <div className="div">46</div>
          </div>
          <div className="rating-circled-parent">
            <img
              className="rating-circled-icon"
              loading="lazy"
              alt=""
              src="/rating-circled@2x.png"
            />
            <div className="wrapper">
              <div className="div1">1800</div>
            </div>
          </div>
          <img className="gear-icon" loading="lazy" alt="" src="/gear@2x.png" />
        </header>
        <div className="daily-goals">Daily Goals</div>
      </section>
      <section className="weekly-goals-wrapper">
        <div className="weekly-goals">Weekly Goals</div>
      </section>
    </div>
  );
};

export default MainDisplay;
