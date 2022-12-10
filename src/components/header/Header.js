import React from 'react'
import image1 from "./Asset 1.png"
import styles from "./Header.module.css"
import Navbar from '../navbar/Navbar.js'
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
function Header(props) {
  return (
    <div className={`${styles.header}`}>
        <Navbar />
        <div className={`${styles.header_intro}`}> 
          <div className={`${styles.box}`}>
            <div className={`${styles.left}`}>
              <h2>A Creator </h2>
              <h1>Powerhouse</h1>
              <p>Empowering creators with the power of <span>community</span></p>
              <button className={`${styles.signUp}`}>Sign Up</button>
            </div>
            <img src={image1} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header