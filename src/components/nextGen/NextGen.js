import React from 'react'
import image from "./Group 8.png"
import styles from "./NextGen.module.css"
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
function NextGen(props) {
  return (
    <div className={`${styles.container}`}>

        <h3>Design your <span>Next-Gen</span> Portfolio</h3>
        <h4>A one-stop shop for your digital presence across the internet! </h4>
        <div className={`${styles.imgg}`}> 
            <img src={image} alt="img" />
        </div>
    </div>
  )
}

export default NextGen