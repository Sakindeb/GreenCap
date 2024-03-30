import React from "react";
import Nav from "./Nav";
import styles from "../styles/About.module.css"
export default function About(){
    return(
       <div>
        <Nav />
           <div class={styles.container}>
		<div class={styles.blur}>
			<h2> Blurred background image </h2>
		</div>
    </div>	
    </div>
        
    )
}