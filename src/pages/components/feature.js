import { graphql } from "gatsby"
import React from "react"
import styles from "../styles/feature.module.css"

export default function Feature () {
    return (
        <div>
            <section className="c-back_gray">
                <a id="feature"></a>
                <div className="c-wrap_large">
                    <h2 className="section_title">特徴</h2>

                    <div className={styles.card}>
                        <img src="/images/img_feature_1.svg" className={styles.card_img} />
                        <div className="ll">
                            <div className={styles.title}>
                                <div className={styles.number}>01</div>
                                <h3>Web/UIデザイナー</h3>
                            </div>
                            <p className={styles.summary}>
                                企業の業務支援システムを開発するIT企業でデザインを担当しています。ユーザ目線になった画面設計や、複雑な情報をわかりやすく伝えられるようなデザインを意識しています。
                            </p>        
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/images/img_feature_2.svg" className={styles.card_img} />
                        <div className="ll">
                            <div className={styles.title}>
                                <div className={styles.number}>02</div>
                                <h3>インハウスデザイナーとして</h3>
                            </div>
                            <p className={styles.summary}>
                                自社システムの成長に合わせてWebサイトの更新やパンフレットを作成してきました。WebやDTP、イラストやバナー作成など幅広く経験しています。
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="/images/img_feature_3.svg" className={styles.card_img} />
                        <div className="ll">
                            <div className={styles.title}>
                                <div className={styles.number}>03</div>
                                <h3>エンジニアと一緒に</h3>
                            </div>
                            <p className={styles.summary}>
                                企業の業務支援システムを開発するIT企業でデザインを担当しています。ユーザ目線になった画面設計や、複雑な情報をわかりやすく伝えられるようなデザインを意識しています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}