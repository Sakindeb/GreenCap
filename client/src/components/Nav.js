import React from "react";
import styles from "../styles/Home.module.css"
export default function Nav(){
    return(
        <div>
        <header className={styles.header}>
        <div>
      <a href="index.html"><img src="../assets/LOGO.png" alt="Logo"/></a>
        </div>
            <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="projects.html">Projects</a></li>
                <li className={styles.navItem}><a href="about.html">About us</a></li>
                <li className={styles.navItem}><a href="team.html">Our team</a></li>
                <li className={styles.navItem}><a href="donate.html">Donate</a></li>
            </ul>
            </nav>
            </header>
        </div>
        
    )
}