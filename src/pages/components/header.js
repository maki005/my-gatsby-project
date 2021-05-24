import React from "react"
import styles  from  '../styles/header.module.css'
import { Link } from "gatsby"



export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <Link to={`/`}><li>TOP</li></Link>
                    <Link to={`/#profile`}><li>プロフィール</li></Link>
                    <Link to={`/#feature`}><li>特徴</li></Link>
                    <Link to={`/#work`}><li>事例</li></Link>
                    <Link to={`/#faq`}><li>よくある質問</li></Link>
                </ul>
            </div>
        </header>
    )
}