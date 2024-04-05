import { FunctionComponent } from "react";
import "./CalorieY.css";

const CalorieY: FunctionComponent = () => {
  return (
    <section className="calorie-y">
      <div className="frame-parent1">
        <div className="nutrition-wrapper">
          <h2 className="nutrition">
            <p className="nutrition1">Nutrition:</p>
          </h2>
        </div>
        <img
          className="test-account-icon1"
          loading="lazy"
          alt=""
          src="/test-account@2x.png"
        />
      </div>
      <div className="nutrient-content">
        <div className="frame-parent2">
          <div className="calorie-parent">
            <div className="calorie">
              <div className="information-part" />
              <i className="calorie1">
                <p className="calorie2">Calorie</p>
              </i>
              <div className="x-parent">
                <i className="x">X</i>
                <div className="nutrient-label">
                  <i className="share-component">/</i>
                </div>
              </div>
              <i className="y">Y</i>
              <img className="bmi-icon" alt="" src="/bmi-icon@2x.png" />
              <div className="red-up-arrow-parent">
                <img
                  className="red-up-arrow"
                  alt=""
                  src="/red-up-arrow@2x.png"
                />
                <img
                  className="green-down-arrow"
                  loading="lazy"
                  alt=""
                  src="/green-down-arrow@2x.png"
                />
              </div>
            </div>
            <div className="vitamin-minerals">
              <div className="information-part1" />
              <div className="vitamin-minerals-wrapper">
                <i className="vitamin-minerals1">{`Vitamin & Minerals`}</i>
              </div>
              <div className="apple-fruit-parent">
                <img
                  className="apple-fruit-icon"
                  loading="lazy"
                  alt=""
                  src="/apple-fruit@2x.png"
                />
                <div className="healthy-symbol">
                  <div className="x-group">
                    <i className="x1">X</i>
                    <div className="nutrient-label1">
                      <i className="simple-carbs-symbol">/</i>
                    </div>
                  </div>
                </div>
                <div className="y-wrapper">
                  <i className="y1">Y</i>
                </div>
                <div className="frame-wrapper">
                  <div className="red-up-arrow-group">
                    <img
                      className="red-up-arrow1"
                      loading="lazy"
                      alt=""
                      src="/red-up-arrow@2x.png"
                    />
                    <img
                      className="green-down-arrow1"
                      loading="lazy"
                      alt=""
                      src="/green-down-arrow@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collaborative-option">
            <div className="user-list-label">
              <div className="protein">
                <div className="information-part2" />
                <i className="protein1">
                  <p className="protein2">Protein</p>
                  <p className="blank-line3">&nbsp;</p>
                </i>
                <img
                  className="eggs-icon"
                  loading="lazy"
                  alt=""
                  src="/eggs@2x.png"
                />
                <div className="x-container">
                  <i className="x2">X</i>
                  <div className="nutrient-label2">
                    <i className="i">/</i>
                  </div>
                </div>
                <i className="y2">Y</i>
                <div className="red-up-arrow-container">
                  <img
                    className="red-up-arrow2"
                    loading="lazy"
                    alt=""
                    src="/red-up-arrow@2x.png"
                  />
                  <img
                    className="green-down-arrow2"
                    loading="lazy"
                    alt=""
                    src="/green-down-arrow@2x.png"
                  />
                </div>
              </div>
              <div className="fat">
                <div className="information-part3" />
                <div className="nutrition-data-holder-wrapper">
                  <div className="nutrition-data-holder">
                    <i className="fat1">
                      <p className="fat2">Fat</p>
                    </i>
                    <div className="calories-count">
                      <div className="b-m-i-indicator">
                        <i className="x3">X</i>
                        <div className="wellbeing-icon">
                          <div className="macronutrient-name">
                            <i className="i1">/</i>
                            <div className="primary-nutrients">
                              <i className="y3">Y</i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="butter-churn-parent">
                  <img
                    className="butter-churn-icon"
                    loading="lazy"
                    alt=""
                    src="/butter-churn@2x.png"
                  />
                  <div className="custom-plan-container">
                    <div className="red-up-arrow-parent1">
                      <img
                        className="red-up-arrow3"
                        loading="lazy"
                        alt=""
                        src="/red-up-arrow@2x.png"
                      />
                      <img
                        className="green-down-arrow3"
                        loading="lazy"
                        alt=""
                        src="/green-down-arrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="units-of-measure">
              <div className="carbohydrats">
                <div className="information-part4" />
                <i className="carbohydrates">
                  <p className="carbohydrates1">Carbohydrates</p>
                </i>
                <div className="dietary-fibre-status">
                  <img
                    className="sugar-cube-icon"
                    loading="lazy"
                    alt=""
                    src="/sugar-cube@2x.png"
                  />
                  <div className="personal-data-holder">
                    <div className="x-parent1">
                      <i className="x4">X</i>
                      <div className="nutrient-label3">
                        <i className="detailed-nutrients">/</i>
                      </div>
                    </div>
                  </div>
                  <div className="y-container">
                    <i className="y4">Y</i>
                  </div>
                  <div className="measurement-unit">
                    <div className="nutrient-classification">
                      <img
                        className="green-down-arrow4"
                        loading="lazy"
                        alt=""
                        src="/green-down-arrow@2x.png"
                      />
                      <img
                        className="red-up-arrow4"
                        loading="lazy"
                        alt=""
                        src="/red-up-arrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fibre-indicator-value">
          <div className="fibre">
            <div className="information-part5" />
            <div className="private-profile">
              <i className="fibre1">Fibre</i>
              <div className="total-calories-displayed">
                <div className="x-parent2">
                  <i className="x5">X</i>
                  <div className="nutrient-label4">
                    <i className="units-of-measurement">/</i>
                  </div>
                </div>
                <div className="y-frame">
                  <i className="y5">Y</i>
                </div>
              </div>
            </div>
            <div className="dietary-fibre-value">
              <img
                className="mushroom-icon"
                loading="lazy"
                alt=""
                src="/mushroom@2x.png"
              />
              <div className="personal-data-visual">
                <div className="total-calories-value">
                  <img
                    className="red-up-arrow5"
                    alt=""
                    src="/red-up-arrow@2x.png"
                  />
                  <img
                    className="green-down-arrow5"
                    loading="lazy"
                    alt=""
                    src="/green-down-arrow@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="water-wrapper">
            <div className="water">
              <div className="information-part6" />
              <div className="wellbeing-marker">
                <i className="water1">
                  <p className="water2">Water</p>
                  <p className="blank-line4">&nbsp;</p>
                </i>
              </div>
              <div className="organizing-pattern">
                <img
                  className="water-icon"
                  loading="lazy"
                  alt=""
                  src="/water@2x.png"
                />
                <div className="fibre-intake-value">
                  <div className="x-parent3">
                    <i className="x6">X</i>
                    <div className="nutrient-label5">
                      <i className="nutrient-analysis">/</i>
                    </div>
                  </div>
                </div>
                <div className="y-wrapper1">
                  <i className="y6">Y</i>
                </div>
                <div className="vitamin-mineral-label">
                  <div className="red-up-arrow-parent2">
                    <img
                      className="red-up-arrow6"
                      loading="lazy"
                      alt=""
                      src="/red-up-arrow@2x.png"
                    />
                    <img
                      className="green-down-arrow6"
                      loading="lazy"
                      alt=""
                      src="/green-down-arrow@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalorieY;
