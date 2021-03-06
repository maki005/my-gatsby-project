import React from "react"
import styles  from  '../styles/header.module.css'
import { Link } from "gatsby"



export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <Link to={`/`}><li>Top</li></Link>
                    <Link to={`/profile/`}><li>About</li></Link>
                    <Link to={`/work_list`}><li>Work</li></Link>
                </ul>
            </div>
            <div className={styles.container_mini}>
                <input type="checkbox" id="humburger" name="humburger" className={styles.humburger} />
                <label htmlFor="humburger" className={styles.menu_humburger}>あああ</label>
                <ul className={styles.list_mini}>
                    <Link to={`/`}><li>TOP</li></Link>
                    <Link to={`/profile/`}><li>about</li></Link>
                    <Link to={`/work_list`}><li>work</li></Link>
                </ul>
            </div>
        </header>
    )
}