import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className={`${styles.FooterBox}`}>
             <div className={`${styles.FooterWrap}`}>
                    <div className={`${styles.Col1}`}>
                        <ul className={`${styles.unstyledlist}`}>
                            <li><a href='#'>Contact US</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.Col2}`}>
                        <ul className={`${styles.unstyledlist}`}>
                            <li><a href='#'>About Us</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.Col3}`}>
                        <h3>KATIE</h3>
                        <Link to='/waitlist' >
                        <button className={`${styles.button}`}  >
                            Join the Waitlist
                        </button>
                        </Link>
                    </div>
            </div>
        </div>

    )
}
export default Footer
