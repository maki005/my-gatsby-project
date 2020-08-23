import React from "react"

import Layout from "../pages/components/layout.js"
import styles from "./styles/profile.module.css"
import "./styles/style.scss"

export default function Profile({ date }) {
    return(
        <div>
            <Layout>
                <h1 className={styles.eyecatch}>Profile</h1>
                <div className="wrap wrap_profile">
                    <p><span className="bold f_large mR_1">足立&nbsp;&nbsp;真規</span>1994年生まれ&nbsp;神戸在住</p>
                    <p>
                        高知大学人文学部国際社会コミュニケーション学科卒業後、未経験でキー・ポイント株式会社へ入社。
                        自社プロダクト（BtoB系SaaS）のUI作成・改善や紹介HPの作成、自社サイトの運営に携わりながら、受託での単発開発システムのUIも担当しています。
                        デザインだけでなく、コーディングやPJによってはディレクションなどをすることもあります。好きなことはバスケと絵を描くこと。モノ作りも好きです。
                    </p>
                    <div className={styles.wrap_list_point}>
                        <div>
                            <h3 className="bold f_middle mB_1">得意なこと</h3>
                            <ul className={styles.list_point}>
                                <li>BtoB系システムのUI作成</li>
                                <li>自社サイト運営・コンテンツ制作</li>
                                <li>プロトタイプ作成</li>
                                <li>コーディング（HTML/CSS）</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="bold f_middle mB_1">苦手・勉強中のもの</h3>
                            <ul className={styles.list_point}>
                                <li>Google Analyticsのデータからの検証</li>
                                <li>グラフィック</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </div>


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
                            <div>キー・ポイント株式会社入社〜現在</div>
                        </li>
                    </ul>
                </div>            

            </Layout>
        </div>
    )
}