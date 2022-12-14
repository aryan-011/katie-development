import React from "react";
import styles from './Landing-page.module.css'
import Header from "../header/Header";
import NextGen from "../nextGen/NextGen";
import Features from "../features/Features";
import AutoCarousel from "../autoCarousel/AutoCarousel";
import img from './Frame 10.png'
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
import AnimatedFeatures from "../animatedFeatures/AnimatedFeatures";
import Footer from "../footer/Footer";


function LandingPage() {
    return (
        <>

            <Header/>
            <NextGen/>
            <Features/>
            <AutoCarousel/>
            <AnimatedFeatures/>
            <Footer/>
            <img className={`${styles.ScrollToTop}`} src={img} alt={img}  onClick={()=> {window.scrollTo(0, 0)}}/>
        </>
    );
}

export default LandingPage;
