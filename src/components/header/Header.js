import React from 'react'
import image1 from "./Asset 1.png"
import image from './Asset 2.png'
import styles from "./Header.module.css"
import Navbar from '../navbar/Navbar.js'
import { useState,useEffect } from 'react'
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
const images = [image1,image];
const heading=['community','technology','information']
function Header(props) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index,setIndex]=useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         setCurrentIndex(prevIndex =>(currentIndex==1?0:prevIndex+1));
//     }, 5000)
    
//     return () => clearInterval(intervalId);
// })
useEffect(() => {
  const intId = setInterval(() => {
    setIndex(prevIndex => (index === 2 ? 0 : prevIndex + 1));
    setCurrentIndex(index===0?0:1);
  }, 1667)
  
  return () => clearInterval(intId);
})
  return (
    <div className={`${styles.header}`}>
        <Navbar />
        <div className={`${styles.header_intro}`}> 
          <div className={`${styles.box}`}>
            <div className={`${styles.left}`}>
              <h2>A Creator </h2>
              <h1>Powerhouse</h1>
              <p>Empowering creators with the power of <span>{heading[index]}</span></p>
              <button className={`${styles.signUp}`}>Sign Up</button>
            </div>
            <img src={images[currentIndex]} alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header