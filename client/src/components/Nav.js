import React from "react";
import styles from "../styles/Home.module.css"
export default function Nav(){
    return(
        <div>
        
            <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Projects</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
            </nav>
            
        </div>
        
    )
}