import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ScanningResult.css";

const ScanningResult: FunctionComponent = () => {
  const navigate = useNavigate();
  // Retrieve the item from sessionStorage
  const item = sessionStorage.getItem('currentUserFoodList');
  // Check if the item is not null before parsing
  const ingredientsList: String[] = item ? JSON.parse(item) : null;

  
  const onSubmitButtonClick = useCallback(async () => {
    const url = 'http://127.0.0.1:8080/openAI';
    const jsonList = JSON.stringify({ prompt: ingredientsList });
    console.log(jsonList);
    console.log("submit");
    const gptAnswer = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonList,
    });
    sessionStorage.setItem('gptAnswer', JSON.stringify(gptAnswer));


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
                <p className="ingredients">Ingredients:</p>
                <ol className="fsf-fsdas-tomato-apple">
                  {ingredientsList.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ol>
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
