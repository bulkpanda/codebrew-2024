import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMainPageContainerClick = useCallback(() => {
    navigate("/3-login-page");
  }, [navigate]);

  return (
    <div className="main-page" onClick={onMainPageContainerClick}>
      <img
        className="screenshot-2024-04-05-at-603"
        alt=""
        src="/screenshot-20240405-at-603-1@2x.png"
      />
      <img
        className="screenshot-2024-04-05-at-559"
        alt=""
        src="/screenshot-20240405-at-559-1@2x.png"
      />
    </div>
  );
};

export default MainPage;
