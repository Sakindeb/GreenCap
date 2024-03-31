import React from "react";
import Nav from "./Nav";
import styles from "../styles/Home.module.css"
export default function Home(){
    return(
        <div>
            <Nav/>
            <div class={styles.container}>
		<div class={styles.blur}>
			<h2> Blurred background image </h2>
		</div>
    </div>	
        </div>
        
    )
}