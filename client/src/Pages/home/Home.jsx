import React from "react";
import ImageInput from "../../components/ImageInput";
import PrimaryBtn from "../../components/PrimaryBtn";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row mx-3">
          <div className="col-10">
            <h1 style={{ fontWeight: "bold", fontFamily: "int" }}>
              Digitize Your Hand-Written Data
            </h1>
            <p style={{ fontWeight: "500" }}>
              Select image you want to extract the information from
            </p>
          </div>
          <div className="col2 col-4"></div>
        </div>

        <div className="row">
          <ImageInput />
        </div>

        <div className="text-center">
          <PrimaryBtn text="Extract Text" width="80%" />
        </div>
      </div>
    </div>
  );
};

export default Home;
