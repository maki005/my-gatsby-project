import React from "react"
import styles  from  '../styles/header.module.css'
import { Link } from "gatsby"



export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <Link to={`/`}><li>TOP</li></Link>
                    <Link to={`/profile/`}><li>Profile</li></Link>
                </ul>
            </div>
        </header>
    )
}