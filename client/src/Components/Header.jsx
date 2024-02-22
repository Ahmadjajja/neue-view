import React from "react";

const Header = ({ leftLogo, heading, rightLogo, onClickHandler }) => {
  return (
    <>
      <div
        style={{
          marginLeft: "1rem",
          marginRight: "1rem",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <nav className="navbar navbar-light ">
            <span className="navbar-brand"  onClick={onClickHandler} style={{cursor: "pointer"}}> 
              <img src={leftLogo} />
            </span>

            <h2>{heading}</h2>

            <a href="#">
              <img src={rightLogo} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;