import React from 'react'
import styles from './AnimatedCard.module.css'
import { motion} from 'framer-motion'
import img from './image1.png'
// import { useState,useEffect } from 'react'
const variants={
    animate:{y:[0,60,60,60,60,0]},
    notAnimate:{y:[0,0,0,0,0,0]},
}
function AnimatedCard(props) {
    // console.log(props.animations)
    return (
        <motion.div className={`${styles.AnimatedCardContainer}`} animate={props.animations} transition={{duration:5,repeat: Infinity,repeatDelay:1}} variants={variants} >
        <div className={`${styles.AnimatedContainer}`}>
            <motion.div className={`${styles.pink}`}
             animate={{x:[-140,-110,-110,-40,-40,-140],y:[16,25,25,0,0,16],height: [72,72,72,230,230,72],width: [169,169,169,169,169,169]}}
             transition={{duration: 5,repeat: Infinity, repeatDelay:1 }}>

            </motion.div>
            <motion.div className={`${styles.yellow}`}
             animate={{y:[-80,-65,-65,-240,-240,-80],x:[130,130,130,60,60,130],height: [72,72,72,170,170,72],width: [169,169,169,169,169,169]}}
             transition={{ duration: 5,repeat: Infinity, repeatDelay:1 }}>

            </motion.div>
            <motion.div className={`${styles.blue}`} 
            animate={{x:[190,150,150,108,108,190],y:[50,30,30,-250,-250,50],height: [72,72,72,130,130,72],width: [169,169,169,169,169,169]}}
            transition={{ duration: 5,repeat: Infinity, repeatDelay:1 }}>

            </motion.div>
            <motion.img src={img} alt={img} className={`${styles.imgg}`}
            animate={{y:[2,-150,-152,0,0,2],x:[0,0,0,0,0,0]}}
            transition={{ duration: 5,repeat: Infinity, repeatDelay:1 }}/>
        </div>
        <div className={`${styles.AnimatedCardTextContainer}`}>
            {props.title}
        </div>
        </motion.div>
    )
}

export default AnimatedCard
