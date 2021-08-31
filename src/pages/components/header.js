import React from "react"
import styles  from  '../styles/header.module.css'
import { Link } from "gatsby"



export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <Link to={`/#profile`}><li>プロフィール</li></Link>
                    <Link to={`/#feature`}><li>経歴</li></Link>
                    <Link to={`/#work`}><li>制作物</li></Link>
                    <Link to={`/#faq`}><li>Q&A</li></Link>
                </ul>
            </div>
        </header>
    )
}