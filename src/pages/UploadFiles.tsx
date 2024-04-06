import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./UploadFiles.css";

const MainPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUploadFoodFilesClick = useCallback(() => {
    navigate("/6-scanning-result");
  }, [navigate]);

  return (
    <div className="uploading-files">
      <FrameComponent2 />
      <section className="uploadbutton">
        <img
          className="upload-food-files"
          loading="lazy"
          alt=""
          src="/upload-food-files@2x.png"
          onClick={onUploadFoodFilesClick}
        />
      </section>
      <section className="categories-parent">
        <i className="categories">
          <p className="categories1">Categories</p>
        </i>
        <FrameComponent1 />
        <i className="groups">Groups</i>
        <FrameComponent />
      </section>
    </div>
  );
};

export default MainPage1;
