import React, { useState } from "react";
import ImageInput from "../../Components/ImageInput";
import PrimaryBtn from "../../Components/PrimaryBtn";
import Header from "../../Components/Header";
import Logo from "../../Assets/Logo.png";
import RightLogo from "../../Assets/img.png";

const Home = () => {
  const [filename, setFilename] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleFileSelect = (selectedFilename) => {
    setFilename(selectedFilename);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <Header leftLogo={Logo} rightLogo={RightLogo} />
      <div>
        <div className="container">
          <div className="row mx-3">
            <div className="col-10">
              <h1 style={{ fontWeight: "bold", fontFamily: "int" }}>
                Digitize Your Hand-Written Data 
              </h1>
              <p style={{ fontWeight: "500" }}>
                Select the image you want to extract information from
              </p>
            </div>
            <div className="col2 col-4"></div>
          </div>

          <div className="row">
            {filename && (
              <div className="col-12 d-flex justify-content-center">
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <div className="input-group input-group-md mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={filename}
                        readOnly
                        aria-label="Filename"
                        aria-describedby="filename-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mx-3">
                  <div className="col-12 text-center">
                    <select
                      className="form-select"
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                      aria-label="Language"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <ImageInput
              onFileSelect={handleFileSelect}
              setFilename={setFilename}
            />
          </div>

          <div className="text-center mt-3">
            <PrimaryBtn text="Extract Text" width="80%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
