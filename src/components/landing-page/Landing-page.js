import React from "react";
import styles from './Landing-page.module.css'
import Header from "../header/Header";
import NextGen from "../nextGen/NextGen";
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"


function LandingPage() {
    return (
        <>
            <Header/>
            <NextGen/>
        </>
    );
}

export default LandingPage;
