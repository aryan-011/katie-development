import React from "react";
// import styles from './Landing-page.module.css'
import Header from "../header/Header";
import NextGen from "../nextGen/NextGen";
import Features from "../features/Features";
import AutoCarousel from "../autoCarousel/AutoCarousel";

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
            
        </>
    );
}

export default LandingPage;
