import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className={`${styles.FooterBox}`}>
             <div className={`${styles.FooterWrap}`}>
                    <div className={`${styles.Col1}`}>
                        <ul className={`${styles.unstyledlist}`}>
                            <li><Link to='/contactus' >Contact US</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.Col2}`}>
                        <ul className={`${styles.unstyledlist}`}>
                            <li><Link to='aboutus'>About Us</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.Col3}`}>
                        <h3 className={`${styles.h3}`}>KATIE</h3>
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
