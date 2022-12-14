import React from 'react'
import image1 from "./Asset 1.png"
import image from './Asset 2.png'
import styles from "./Header.module.css"
import Navbar from '../navbar/Navbar.js'
import { useState,useEffect} from 'react'
import {useInterval} from 'react-use'
import styled,{keyframes} from 'styled-components'
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
const images = [image1,image];
const heading=['community','technology','information']


function Header(props) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index,setIndex]=useState(0);
  const [image,setImage]=useState(false)

useEffect(() => {
  const intId = setInterval(() => {
    if (index===2){
      setIndex(0)
      if (image===false)
      {
        setCurrentIndex(1)
      }
      else{
        setCurrentIndex(0)
      }
      setImage(!image)
    }
    else{
      setIndex(index+1)

    }
  }, 1500)
  
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
              <p>Empowering creators with the power of <span >{heading[index]}</span></p>
              <button className={`${styles.signUp}`}>Sign Up</button>
            </div>
            <img src={images[currentIndex]} alt="img" />
          </div>
        </div>
    </div>
  )
}

const animation= keyframes`
0%{
  opacity: 0;
};
100%{
  opacity: 1;
};`
const Wrapper= styled.span`
display:inline-block;
opacity:0;
animation-name:${animation};
`
export default Header