import React from 'react'
import styles from './FeatureCard.module.css'
function FeatureCard(props) {
    return (
        <div className={`${styles.card}`}>
          <div className={`${styles.logoContainer}`}>
            
          </div>
           <h2 className={`${styles.title}`} >{props.title} </h2>
        </div>

    )
}

export default FeatureCard
