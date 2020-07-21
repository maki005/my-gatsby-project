import React from "react"
import styles from '../styles/eyecatch.module.css'

export default function Eyecatch(){
    return (
        <div>

        <section id="eyecatch">
            <h1 className={styles.eyecatch}>MAKI ADACHI Portfolio</h1>
            <p className={styles.summary}>
                Web UIデザイナーとして作成してきたものを紹介します。
                業務の中だけでないものも紹介しています。
                公開内容を他媒体へリンクすることはお控えください。
            </p>
        </section>
        </div>
    )
}