import React, { useState } from "react";
import ImageInput from "./ImageInput";

const FilenameShowInput= () => {
  const [filename, setFilename] = useState("");

  const handleFileSelect = (filename) => {
    console.log("Selected filename:", filename);
  };

  return (
    <div>
      
      {filename && <p>Filename: {filename}</p>}
    </div>
  );
};

export default FilenameShowInput;
