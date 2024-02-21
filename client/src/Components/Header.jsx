import React from "react";

const Header = ({ leftLogo, heading, rightLogo }) => {
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
          <nav class="navbar navbar-light ">
            <a class="navbar-brand" href="#">
              <img src={leftLogo} />
            </a>

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