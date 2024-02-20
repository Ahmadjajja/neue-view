import React from 'react'

const SecondaryBtn = ({ width, text }) => {
  return (
    <div>
    <button className="btn btn-secondary " style={{ width: width,height:"2.5rem" }}>{text}</button>
    </div>
  )
}

export default SecondaryBtn;
