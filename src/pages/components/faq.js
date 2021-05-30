import React from "react"

import styles from "../styles/faq.module.css"

export default function Feature () {
    return (
        <div>
            <section className="c-back_gray">
                <a id="faq"></a>
                <div className={styles.faq_wrap_small}>
                    <h2 className="section_title">よくある質問</h2>

                    <div className={styles.card}>
                        <div className={`${styles.text_question} ${styles.test}`}>
                            <div className={styles.label}>Q.</div>
                            <div>普段使用しているツールは何ですか？</div>
                        </div>
                        <div className={styles.text_answer}>
                            <div className={styles.label}>A.</div>
                            <div className="c-text_normal">
                                パソコンはMacを使用しています。<br />
                                ツールはAdobe XD、illustrator、Photoshopを主に利用しています。<br />
                                <br />
                                ローカル環境が必要な場合はCentOSを使用していますが、環境構築はエンジニアに協力してもらいながら作成しています。
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.text_question}>
                            <div className={styles.label}>Q.</div>
                            <div>どのようなデザインが得意ですか？</div>
                        </div>
                        <div className={styles.text_answer}>
                            <div className={styles.label}>A.</div>
                            <div className="c-text-normal">
                                BtoBでの経験からビジネス向けらしい、
                                シンプルなデザインが得意です。<br />青や緑などを使用することが多く、
                                爽やかさや誠実な印象を与えるようなデザインを多く作成してきました。
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.text_question}>
                            <div className={styles.label}>Q.</div>
                            <div>現在の主な業務はなんですか？</div>
                        </div>
                        <div className={styles.text_answer}>
                            <div className={styles.label}>A.</div>
                            <div className="c-text-normal">
                                7割がWebサイトに関わること、3割がUIなどです。<br />
                                プロダクトサイトの改修や、コンテンツ見直し・追加などが中心です。また、受託開発も受けているため、UI制作では自社プロダクト以外のUIを作成することもあります。
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.text_question}>
                            <div className={styles.label}>Q.</div>
                            <div>キャリアについて考えていることはありますか？</div>
                        </div>
                        <div className={styles.text_answer}>
                            <div className={styles.label}>A.</div>
                            <div className="c-text-normal">
                                デザインももちろんですが、基本的にものつくり全般がすきです。<br />
                                一生物作りに関わりたいと考えており、そのために知識を増やしていきたいと考えています。もともと、新しいことを知る、できないことができるということに喜びを感じるので、日々学べる環境で働きたいです。
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}