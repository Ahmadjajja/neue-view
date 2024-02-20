import React from 'react'
import vector from "../assets/Vector.png"
import PrimaryBtn from './PrimaryBtn'

const ImageInput = () => {
  return (
    <div>
      
      <div class="uploadOuter" style={{height:"25rem"}} >
      <span class="dragBox " >
      <div className="row mt-5">
      <div className='col-12'><img src={vector} alt="" />
      </div>
      </div>
      <div className="row">
      <div className='col-12'>
      Drag and drop image or upload from your file.(jpg, png, pdf)</div>
      </div>
      <span><b> Or</b></span>
      <div className="row  d-flex ">
     
    {/*    <PrimaryBtn width={"6rem"} text={"Camera"} />*/} 
      <PrimaryBtn width={"6rem"} text={"Upload"}/>
     
      </div>
    <input type="file" onChange="dragNdrop(event)"  ondragover="drag()" ondrop="drop()" id="uploadFile"  />
</span>
</div>


     
    </div>
  )
}

export default ImageInput

