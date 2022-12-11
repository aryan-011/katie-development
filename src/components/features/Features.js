import React from 'react'
import styles from './Features.module.css'
import FeatureCard from './FeatureCard'
let titlearray=['Feature your best pieces of content.','Worked with powerful brands?',"List your offerings,as many as you'd like.","Let your prospects schedule call w you."]
function Features() {
    return (
        <div className={`${styles.FeatureCardContainer}`}>
            <FeatureCard title={titlearray[0]} />
            <FeatureCard title={titlearray[1]} />
            <FeatureCard title={titlearray[2]} />
            <FeatureCard title={titlearray[3]} />
        </div>
    )
}

export default Features
