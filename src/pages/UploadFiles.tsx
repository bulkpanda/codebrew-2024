import { FunctionComponent, useCallback, useRef } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./UploadFiles.css";

const UploadFiles: FunctionComponent = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  async function uploadFileToServer(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('image', file); // 'image' is the key expected by the server for the file
    try {
      const response = await fetch('your-backend-endpoint/upload', {
        method: 'POST',
        body: formData, 
      });
  
      if (!response.ok) {
        throw new Error(`Server responded with a status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error("Error uploading file:", error);
      throw error; // Ensure errors can be caught where the function is called.
    }
  }
  
  const onUploadFoodFilesClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("file change function called")
    const file = event.target.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    try {
      // await uploadFileToServer(file);
      navigate("/6-scanning-result");
    } 
    catch (error) {
      console.error("File upload failed", error);
    }
  };

  return (
    <div className="uploading-files">
      <FrameComponent2 />
      <section className="uploadbutton">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
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
