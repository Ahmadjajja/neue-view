import React from 'react';

const PrimaryBtn = ({ width, text }) => {
  return (
    <div>
      <button className="btn btn-primary " style={{ width: width,height:"2.5rem" }}>{text}</button>
    </div>
  );
};

export default PrimaryBtn;
