import React from 'react';
import styles from './css/Layout.module.css';
import MainMenu from "MainMenu";

export default function Layout({children}) {
    return (<>


        <div id={styles.nav}>
            <p id={styles.logo}>Todo project</p>
            <MainMenu/>
        </div> 
        <div id={styles.content}>
            {children}
        </div>
        
    
    </>)
}
