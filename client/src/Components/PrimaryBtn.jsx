import React from "react";

const PrimaryBtn = ({ width, text,onClickHandler, display }) => {
  return (
    <div>
      <button
        className="btn btn-primary "
        style={{ width: width, height: "2.5rem", borderRadius: "15px",display: {display}}}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
