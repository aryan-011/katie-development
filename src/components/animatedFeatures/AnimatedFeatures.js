import {React,useState,useEffect} from 'react'
import  styles from './AnimatedFeatures.module.css'
import img from '../landing-page/Frame 10.png'
import AnimatedCard from '../animatedCard/AnimatedCard'

const heading=['Manage everything at one place','Generate Invoices','Track Payment']
// const animate={y:[0,60,60,60,60,0]}
// const notAnimate={y:[0,0,0,0,0,0]}
function AnimatedFeatures() {

    const useCheckMobileScreen = () => {
        const [width, setWidth] = useState(window.innerWidth);
        const handleWindowSizeChange = () => {
                setWidth(window.innerWidth);
        }
    
        useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);
        return (width <= 1025);
    }

    
    return (
        <div className={`${styles.AnimatedFeaturesContainer}`} >
            <h1 className={`${styles.h1}`}>Say Goodbye to Chaos</h1>
            <div className={`${styles.AnimatedFeaturesCardContainer}`}>
                <AnimatedCard title={heading[0]} animations={useCheckMobileScreen()?{y:[0,0,0,0,0,0]}:{y:[0,60,60,60,60,0]}} />
                <AnimatedCard title={heading[1]} animations={useCheckMobileScreen()?{y:[0,0,0,0,0,0]}:{y:[0,60,60,60,60,0]}} />
                <AnimatedCard title={heading[2]} animations={useCheckMobileScreen()?{y:[0,0,0,0,0,0]}:{y:[0,60,60,60,60,0]}} />
            </div>
            <img className={`${styles.ScrollToTop}`} src={img} alt={img}  onClick={()=> {window.scrollTo(0, 0)}}/>
        </div>
    )
}

export default AnimatedFeatures
