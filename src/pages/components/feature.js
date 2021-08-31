import { graphql } from "gatsby"
import React from "react"
import styles from "../styles/feature.module.css"

export default function Feature () {
    return (
        <div>
            <section className="c-back_gray">
                <a id="feature"></a>
                <div className="c-wrap_large">
                    <h2 className="section_title">経歴</h2>

                    <div className={styles.card}>
                        <img src="/images/img_feature_1.svg" className={styles.card_img} />
                        <div className="ll">
                            <div className={styles.title}>
                                <div className={styles.number}>01</div>
                                <h3>Web/UIデザイナー</h3>
                            </div>
                            <p className={styles.summary}>
                                自社プロダクトである業務支援システムのUIやWebサイトを担当しています。ユーザ目線になった画面設計や、複雑な情報をわかりやすく伝えられるようなデザインを意識しています。
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
                                プロダクトの成長に合わせてWebサイトの更新やパンフレットを作成してきました。WebやDTP、イラストやバナー、資料デザインなど幅広く経験しています。
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
                                エンジニアとチームで作業することが多く、GitHubや環境構築など業務で経験しています。他業種とともに働きながら、コミュニケーションや知識獲得の面でも刺激を受けています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}