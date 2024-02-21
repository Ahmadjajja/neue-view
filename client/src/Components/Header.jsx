import React from 'react'
import Logo from "../Assets/Logo.png"
import RecentImg from "../assets/img.png"

const Header = () => {
  return (
    <>
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <div className='container'>

          <nav class="navbar navbar-light ">
            <a class="navbar-brand" href="#">
              <img src={Logo} width={45} height={30} />
            </a>
            <a class="navbar-brand" href="#">
              <img src={RecentImg} width={40} height={35} />
            </a>
          </nav>

        </div>
      </div>
    </>
  )
}

export default Header;
