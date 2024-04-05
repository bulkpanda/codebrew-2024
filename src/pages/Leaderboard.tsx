import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Leaderboard.css";

const Leaderboard: FunctionComponent = () => {
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
    <div className="leaderboard">
      <header className="frame-header">
        <div className="valor-parent">
          <img
            className="valor-icon"
            loading="lazy"
            alt=""
            src="/valor@2x.png"
          />
          <div className="rating-circle">46</div>
        </div>
        <div className="gear-shape">
          <img
            className="rating-circled-icon"
            loading="lazy"
            alt=""
            src="/rating-circled@2x.png"
          />
          <div className="div2">1800</div>
        </div>
        <img className="gear-icon" loading="lazy" alt="" src="/gear@2x.png" />
      </header>
      <main className="frame-main">
        <div className="frame-wrapper1">
          <div className="group-div">
            <div className="wrapper">
              <div className="div3">1.</div>
            </div>
            <div className="rectangle-div" />
            <div className="frame-wrapper2">
              <div className="rectangle-parent1">
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle@2x.png"
                />
                <div className="test-account-wrapper">
                  <img
                    className="test-account-icon1"
                    alt=""
                    src="/test-account@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="wren-ichi-wrapper">
              <div className="wren-ichi">Wren Ichi</div>
            </div>
            <div className="frame-wrapper3">
              <div className="rating-circled-parent">
                <img
                  className="rating-circled-icon1"
                  loading="lazy"
                  alt=""
                  src="/rating-circled@2x.png"
                />
                <div className="container">
                  <div className="div4">
                    <span className="txt">
                      <p className="p">4600</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rating-circled-group">
          <img
            className="rating-circled-icon2"
            alt=""
            src="/rating-circled@2x.png"
          />
          <div className="frame-child1" />
          <div className="frame-parent2">
            <div className="frame">
              <div className="div5">2.</div>
            </div>
            <div className="rectangle-parent2">
              <img className="rectangle-icon1" alt="" src="/rectangle@2x.png" />
              <div className="test-account-container">
                <img
                  className="test-account-icon2"
                  alt=""
                  src="/test-account@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="wren-ni-wrapper">
            <div className="wren-ni">Wren Ni</div>
          </div>
          <div className="frame-wrapper4">
            <div className="frame-parent3">
              <div className="rating-circled-wrapper">
                <img
                  className="rating-circled-icon3"
                  loading="lazy"
                  alt=""
                  src="/rating-circled@2x.png"
                />
              </div>
              <div className="div6">3900</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="rectangle-parent3">
            <div className="frame-child2" />
            <div className="wrapper1">
              <div className="div7">3.</div>
            </div>
            <div className="frame-wrapper6">
              <div className="rectangle-parent4">
                <img
                  className="rectangle-icon2"
                  alt=""
                  src="/rectangle@2x.png"
                />
                <div className="test-account-frame">
                  <img
                    className="test-account-icon3"
                    alt=""
                    src="/test-account@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="wren-san-wrapper">
              <div className="wren-san">Wren San</div>
            </div>
            <div className="frame-wrapper7">
              <div className="rating-circled-container">
                <img
                  className="rating-circled-icon4"
                  loading="lazy"
                  alt=""
                  src="/rating-circled@2x.png"
                />
                <div className="div8">3400</div>
              </div>
            </div>
          </div>
        </div>
        <section className="combo-chart-instance-parent">
          <div className="combo-chart-instance">
            <div className="square-border-leaderboard">
              <div className="leaderboard-item">
                <div className="leaderboard-item-child" />
                <div className="div9">1</div>
              </div>
              <div className="leaderboard-item1">
                <div className="leaderboard-item-item" />
                <div className="div10">2</div>
              </div>
              <div className="rectangle-parent5">
                <div className="frame-child3" />
                <div className="div11">3</div>
              </div>
              <img
                className="leaderboard-item-icon"
                loading="lazy"
                alt=""
                src="/rectangle@2x.png"
              />
              <img
                className="leaderboard-item-icon1"
                loading="lazy"
                alt=""
                src="/rectangle@2x.png"
              />
              <img
                className="leaderboard-item-icon2"
                loading="lazy"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
          </div>
          <footer className="square-border-group">
            <img
              className="square-border-icon1"
              loading="lazy"
              alt=""
              src="/square-border@2x.png"
              onClick={onSquareBorderImageClick}
            />
            <img
              className="leaderboard-icon1"
              loading="lazy"
              alt=""
              src="/leaderboard1@2x.png"
              onClick={onLeaderboardImageClick}
            />
            <img
              className="people-icon1"
              loading="lazy"
              alt=""
              src="/people@2x.png"
              onClick={onPeopleImageClick}
            />
            <img
              className="combo-chart-icon1"
              loading="lazy"
              alt=""
              src="/combo-chart@2x.png"
            />
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Leaderboard;
