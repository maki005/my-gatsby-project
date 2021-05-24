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
                            <div>苦手なことは何ですか？</div>
                        </div>
                        <div className={styles.text_answer}>
                            <div className={styles.label}>A.</div>
                            <div className="c-text-normal">
                                装飾をたくさん施した華やかなデザインの経験がなく苦手です。<br />
                                が、グラフィック力はつけていきたいので、挑戦したいですし、華やかさでなくても
                                あしらいなどでクオリティが上げられるようにしていきたいと考えています。
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
                                一生物作りに関わりたいと考えていますし、新しいことを知る、できないことができるということに喜びを感じるので、日々学べる環境で働きたいと考えています。
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}