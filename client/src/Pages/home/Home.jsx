import React from 'react'
import ImageInput from '../../Components/ImageInput'

const Home = () => {
  return (
    <div >
      <div className="container">
      <div className="row mx-3">
      <div className="col1 col-8">
    <h1 style={{fontWeight:"bold"}}>Digitize Your 
    Hand-Written Data</h1>
    <p style={{fontWeight:"bold"}}>Select image you want to 
    extract the information from</p>
      </div>
      <div className="col2 col-4"></div>

      </div>

      <div className="row col-12 ">
      
      <ImageInput/>

      </div>

      </div>
    </div>
  )
}

export default Home
