import React from 'react'
import  styles from './AnimatedFeatures.module.css'
import AnimatedCard from '../animatedCard/AnimatedCard'
const heading=['Manage everything at one place','Generate Invoices','Track Payment']
function AnimatedFeatures() {
    return (
        <div className={`${styles.AnimatedFeaturesContainer}`}>
            <h1>Say Goodbye to Chaos</h1>
            <div className={`${styles.AnimatedFeaturesCardContainer}`}>
                <AnimatedCard title={heading[0]} />
                <AnimatedCard title={heading[1]} />
                <AnimatedCard title={heading[2]} />
            </div>
        </div>
    )
}

export default AnimatedFeatures
