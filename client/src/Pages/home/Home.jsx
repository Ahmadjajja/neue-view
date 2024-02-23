import React, { useState, useContext } from "react";
import ImageInput from "../../Components/ImageInput";
import PrimaryBtn from "../../Components/PrimaryBtn";
import Header from "../../Components/Header";
import Logo from "../../Assets/Logo.png";
import RightLogo from "../../Assets/img.png";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import "./Home.css"; // Import CSS file for custom styling
import { DataContext } from "../../Context/DataContext";

const Home = () => {
  const {setImageName}= useContext(DataContext);
  const navigate = useNavigate();
  const [filename, setFilename] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (selectedFilename) => {
    setFilename(selectedFilename);
    setImageName(selectedFilename)
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleExtractText = () => {
    // Perform any necessary actions before navigation
    setIsLoading(true);
  
    // Simulate a delay of 3 seconds before navigating
    setTimeout(() => {
      // Navigate to the Analyze component
      navigate("/analyse");
    }, 3000);
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


          <div className="text-center mb-5" >
            <PrimaryBtn style={{display: "block"}} className="text-center" display="block" text={isLoading ? <ThreeDots
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName="loader-block"
              visible={true}
              className="loader d-block text-center"
            />: "Extract Text"} width="80%" onClickHandler={handleExtractText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
