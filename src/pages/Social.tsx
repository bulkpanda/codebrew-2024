import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Social.css";

const Social: FunctionComponent = () => {
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
    <div className="social">
      <main className="f-r-a-m-e-parent">
        <section className="f-r-a-m-e">
        <header className="rectangle-parent">
          <div className="frame-child">
            <input type="search" className="search-input" placeholder="Search..." />
            <button className="search-button">
              <img
                className="search-icon"
                loading="lazy"
                alt="Search"
                src="/search@2x.png"
              />
            </button>
          </div>
        </header>

        <div className="add-male-user-group-wrapper">
          <img
            className="add-male-user-group"
            loading="lazy"
            alt=""
            src="/add-male-user-group@2x.png"
          />
        </div>
        </section>
        <section className="square-border">
          <div className="square-border-inner">
              <div className="rectangle-container">
                <div className="frame-inner" />
                <div className="screenshot-2024-04-05-at-559-group">
                  <img
                    className="screenshot-2024-04-05-at-5592"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240405-at-559-2@2x.png"
                  />
                  <div className="content-text">
                  Made some spaghetti and meatballs. Healthy and funny looking
                  dish to maintain my protein...
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-parent1">
                    <div className="thumbs-up-group">
                      <img
                        className="thumbs-up-icon1"
                        loading="lazy"
                        alt=""
                        src="/thumbs-up@2x.png"
                      />
                      <img
                        className="thumbs-down-icon1"
                        alt=""
                        src="/thumbs-down@2x.png"
                      />
                    </div>
                  <img className="topic-icon1" alt="" src="/topic@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="square-border-inner">
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="screenshot-2024-04-05-at-559-group">
                <img
                  className="screenshot-2024-04-05-at-5592"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20240405-at-559-2-1@2x.png"
                />
                <div className="content-text">
                  Finished my jogging session today. Feeling great...
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-parent1">
                  <div className="thumbs-up-group">
                    <img
                      className="thumbs-up-icon1"
                      loading="lazy"
                      alt=""
                      src="/thumbs-up@2x.png"
                    />
                    <img
                      className="thumbs-down-icon1"
                      alt=""
                      src="/thumbs-down@2x.png"
                    />
                  </div>
                  <img className="topic-icon1" alt="" src="/topic@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="square-border-parent">
        <img
          className="square-border-icon"
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
    </div>
  );
};

export default Social;
