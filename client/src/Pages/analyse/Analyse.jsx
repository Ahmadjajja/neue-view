import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import backBtn from "../../Assets/backBtn.png";
import dumyData from "../../Data/DumyData";
import Table from "../../Components/Table";
import { useNavigate } from "react-router-dom";

const Analyse = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dumyData)

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <Header leftLogo={backBtn} heading="File Name" onClickHandler={handleBack} />

      <div
        style={{
          backgroundColor: "#EFEFEF",
          height: "93.5vh",
        }}
      >
        <div className="container pt-5 text-center">
          <Table data={data} />
          <div class="d-grid gap-2 col-6 mx-auto mt-5">
            <button class="btn btn-outline-primary" type="button">Done</button>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="text-center mt-5"
            placeholder="Ask me anything..."
            id="password-input"
            style={{
              width: "80%",
              position: data.length > 7 ? "relative" : "absolute",
              margin: "auto",
              display: "block",
              bottom: "30px",
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
