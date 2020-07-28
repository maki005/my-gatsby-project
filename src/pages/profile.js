import React from "react"

import Layout from "../pages/components/layout.js"
import styles from "./styles/profile.module.css"
import "./styles/style.scss"

export default function Profile({ date }) {
    return(
        <div>
            <Layout>
                <h1 className={styles.eyecatch}>Profile</h1>
                <div>スライドとか入れる</div>


                <div className={styles.wrap_ex}>
                    <h2 className="sub_title">略歴</h2>
                    <ul className={styles.wrap_list}>
                        <li className={styles.list_ex}>
                            <div>2013年4月</div>
                            <div>高知大学入学</div>
                        </li>
                        <li className={styles.list_ex}>
                            <div>2017年3月</div>
                            <div>高知大学卒業</div>
                        </li>
                        <li className={styles.list_ex}>
                            <div>2017年4月</div>
                            <div>現職入社〜現在</div>
                        </li>
                    </ul>
                </div>            

            </Layout>
        </div>
    )
}