import React from "react";
import styles from './Landing-page.module.css'
import Header from "../header/Header";
import NextGen from "../nextGen/NextGen";
import Features from "../features/Features";
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"


function LandingPage() {
    return (
        <>
            <Header/>
            <NextGen/>
            <Features/>
        </>
    );
}

export default LandingPage;
