import { FunctionComponent, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./UploadFiles.css";

const UploadFiles: FunctionComponent = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUploadFoodFilesClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // console.log(file);
      const formData = new FormData();
      formData.append('image', file);
      const url = 'http://127.0.0.1:8080/googleVision';
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // uploading file success
          const data = await response.json();

          console.log('Upload successful', data);

          navigate("/6-scanning-result");
        } else {
          console.error('Upload failed', response.statusText);
        }
      } catch (error) {
        console.error('Upload error', error);
      }
    }


  };

  return (
    <div className="uploading-files">
      <FrameComponent2 />
      <section className="uploadbutton">
<<<<<<< HEAD
        {/* hidden */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*" 
          // capture 
=======
        <input
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
>>>>>>> 8d81b8beb461de5fb2bf9234bf8dbc40d351c9ee
        />
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

export default UploadFiles;
