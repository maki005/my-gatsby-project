import React from "react"
import styles  from  '../styles/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>TOP</li>
                    <li>Profile</li>
                </ul>
            </div>
        </header>
    )
}