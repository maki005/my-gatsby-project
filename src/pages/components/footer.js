import React from "react"
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>MAKI ADACHI Portfolio | 2020</div>
            <span className={styles.container}></span>
        </footer>
    )
}