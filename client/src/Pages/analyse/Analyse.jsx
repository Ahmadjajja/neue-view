import React from "react";
import Header from "../../Components/Header";
import backBtn from "../../Assets/backBtn.png";
const Analyse = () => {
  return (
    <>
      <Header leftLogo={backBtn} heading="File Name" />

      <div
        style={{
          backgroundColor: "#EFEFEF",
          height: "93.5vh",
        }}
      >
        <div className="container pt-5 text-center">
          <h1>Analyse</h1>
        </div>

        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="text-center"
            placeholder="Ask me anything..."
            id="password-input"
            style={{
              width: "80%",
              position: "absolute",
              margin: "auto",
              display: "block",
              bottom: "15px",
              border: "none",
              backgroundColor: "white",
              padding: "5px 70px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Analyse;
