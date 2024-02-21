import React from "react";
import Header from "../../components/Header";
import backBtn from "../../assets/backBtn.png";
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
        <div className="container pt-5">
          <h1>Analys</h1>
        </div>

        <input
          type="text"
          placeholder="Ask me anything..."
          id="password-input"
          style={{
            position: "absolute",
            margin: "0 auto",
            display: "block",
            bottom: "15px",
            border: "none",
            backgroundColor: "white",
            padding: "5px 70px",
            borderRadius: "10px",
          }}
        />
      </div>
    </>
  );
};

export default Analyse;
