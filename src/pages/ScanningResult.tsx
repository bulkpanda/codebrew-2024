import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ScanningResult.css";

const ScanningResult: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSubmitButtonClick = useCallback(() => {
    navigate("/3-nutrition-analysis");
  }, [navigate]);

  return (
    <div className="scanning-result">
      <main className="background">
        <section className="upload-picture" />
        <section className="scanning-results-parent">
          <div className="scanning-results" />
          <div className="scanning-results-group">
            <b className="scanning-results1">Scanning results:</b>
            <div className="list-of-items">
              <b className="ingredients-fsf-fsdas-container">
                <p className="ingredients">{`Ingredients: `}</p>
                <ol className="fsf-fsdas-tomato-apple">
                  <li className="fsf">fsf</li>
                  <li className="fsdas">fsdas</li>
                  <li className="tomato">tomato</li>
                  <li className="apple">apple</li>
                  <li className="blank-line">&nbsp;</li>
                </ol>
                <p className="blank-line1">&nbsp;</p>
                <p className="blank-line2">&nbsp;</p>
              </b>
            </div>
          </div>
          <div className="confirmation-area">
            <div className="submit" onClick={onSubmitButtonClick}>
              <b className="submit1">Submit</b>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScanningResult;
