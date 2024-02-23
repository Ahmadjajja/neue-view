import React, { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header";
import backBtn from "../../Assets/backBtn.png";
import dumyData from "../../Data/DumyData";
import Table from "../../Components/Table";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { DataContext } from "../../Context/DataContext";
import { TiArrowUpOutline } from "react-icons/ti";
const Analyse = () => {
  const { imageName } = useContext(DataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isPushLoading, setIsPushLoading] = useState(false);
  const [isDataStored, setIsDataStored] = useState(false);
  const [data, setData] = useState(dumyData)

  useEffect(() => {
    // Simulate a delay of 3 seconds before navigating
    setTimeout(() => {
      // Navigate to the Analyze component
      setIsLoading(false)
    }, 3000);
  }, [])

  const handleBack = () => {
    navigate("/");
  }

  const dataHandler = () => {
    setIsPushLoading(true);
    // Simulate a delay of 3 seconds before navigating
    setTimeout(() => {
      // Navigate to the Analyze component
      setIsPushLoading(false);
      setIsDataStored(true);
    }, 3000);
  }

  return (
    <>
      <Header leftLogo={backBtn} heading={imageName} onClickHandler={handleBack} />

      <div
        style={{
          backgroundColor: "#EFEFEF",
          height: "93.5vh",
        }}
      >
        <div className="container pt-5 text-center">
          {isLoading ? <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}><ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /></div> : <Table data={data} />}

          <div class="d-grid gap-2 col-6 mx-auto mt-5">
            <button class="btn btn-outline-primary" type="button" onClick={dataHandler}>
              {isPushLoading ? <div className='spinner-border spinner-border-sm'></div> : "Store Data to DB"}
            </button>
            {isDataStored &&
              <h1 className="text-center text-primary">Data Stored</h1>
            }
          </div>
        </div>

        <div className="input-group mb-3 mt-4 d-flex justify-content-center" style={{width: "80%", margin: "0 auto"}}>
          <input type="text" className="form-control" placeholder="Ask me anything..." aria-label="Username" aria-describedby="basic-addon1" />
          <span className="btn btn-outline-primary" id="basic-addon1">
            {/* <img src="./send.png" alt="send" /> */}
            <TiArrowUpOutline />
          </span>
        </div>


        {/* <div className="d-flex justify-content-center">
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
        </div> */}
      </div>
    </>
  );
};

export default Analyse;
