import React from 'react';
import styles from './css/Layout.module.css';
import MainMenu from "MainMenu";

export default function Layout({children}) {
    return (
        <>
        <div>메뉴바
        <h1>로고</h1>
            <MainMenu/>
        </div> 
        <div className={styles.content}>{children}</div>
        </>
    )
}
