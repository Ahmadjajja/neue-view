import React, { useState } from "react";
import vector from "../Assets/Vector.png";
import PrimaryBtn from "./PrimaryBtn";

const ImageInput = ({ onFileSelect, setFilename }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFilename(file.name); 
        
        onFileSelect(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-5">
      <div className="uploadOuter " style={{ height: "25rem", overflow: "hidden" }}>
        <span className="dragBox" style={{ display: "block", height: "100%", position: "relative" }}>
          {previewImage ? (
            <img src={previewImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          ) : (
            <div style={{ height: "100%" }}>
              <div className="row mt-5">
                <div className="col-12">
                  <img src={vector} alt="Upload Vector" id="uploadIcon" />
                </div>
                <div className="col-12">
                  Drag and drop image or upload from your file.(jpg, png, pdf)
                </div>
              </div>
              <span>
                <b> Or</b>
              </span>
              <div className="row d-flex ">
                <PrimaryBtn width={"6rem"} text={"Upload"} />
              </div>
            </div>
          )}
          <input
            type="file"
            onChange={handleFileInputChange}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => e.preventDefault()}
            id="uploadFile"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
          />
        </span>
      </div>
    </div>
  );
};

export default ImageInput;
