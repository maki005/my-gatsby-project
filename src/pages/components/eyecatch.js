import React from "react"
import styles from '../styles/eyecatch.module.css'

export default function Eyecatch(){
    return (
        <div>
            <section>
                <div className={styles.eyecatch}>
                    <div className={styles.inner_eyecatch}>
                        <div className={styles.wrap_title}>
                            <h1 className={styles.title}>PO<span className={styles.color}>R</span>TFOLIO</h1>
                            <div className={styles.sub_title}>Web UI/UX Designer</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}