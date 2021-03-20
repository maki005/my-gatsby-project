import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../pages/components/layout.js"
import styles from "./styles/profile.module.css"
import "./styles/style.scss"

export default function Profile({ data }) {
    return(
        <div>
            <Layout>
                <h1 className="page_title">About</h1>
                <div className="page_title_under"></div>
                <div className="wrap wrap_profile">
                    <p><span className="bold f_middle mR_1">足立&nbsp;&nbsp;真規</span>Maki&nbsp;ADACHI</p>
                    <p>
                        1994年生まれ。高知大学人文学部国際社会コミュニケーション学科卒業後、キー・ポイント株式会社へ新卒入社。
                        自社プロダクト（BtoB系SaaS）のUI作成・改善や紹介HPの作成、自社サイトの運営に携わりながら、受託での単発開発システムのUIも担当しています。
                        デザインだけでなく、コーディングやPJによってはディレクションなどをすることもあります。
                    </p>
                    <p>
                        新しいことを知ることに楽しみを感じる人間です。
                        運動、読書、旅行、写真、料理、絵など多趣味。一生なにかものを作って生きていきたいと思っています。どちらかというと0→1が得意です。
                    </p>
                    <div className={styles.wrap_list_point}>
                        <h2 className={styles.title_point}>できること/してきたこと</h2>
                        <div className={styles.inner_list_point}>
                            <div>
                                <figure className={styles.wrap_point_img}>
                                    <Img fluid={data.design.childImageSharp.fluid} alt="インハウスデザイナーとして" />
                                </figure>
                                <h3 className="bold">インハウスデザイナー</h3>
                                <p>自社システムの成長に合わせてサイトの更新やパンフレットを作成したり、SNS用バナーなども作成。</p>
                            </div>
                            <div>
                                <figure className={styles.wrap_point_img}>
                                    <Img fluid={data.ui.childImageSharp.fluid} alt="webとシステムUIを担当"　/>
                                </figure>
                                <h3 className="bold">Web/UIデザイン</h3>
                                <p>BtoBを中心にシステムUIやWebサイトのデザインを作成。ライティングや必要に応じてイラストなども制作</p>
                            </div>
                            <div>
                                <figure className={styles.wrap_point_img}>
                                    <Img fluid={data.engineer.childImageSharp.fluid} alt="エンジニアと一緒に業務"　/>
                                </figure>
                                <h3 className="bold">エンジニアと</h3>
                                <p>開発ではほとんどの業務をエンジニアと同じチームですすめる。Gitや開発環境構築なども行う。</p>
                            </div>
                        </div>
                    </div>
                </div>
          

            </Layout>
        </div>
    )
}

export const query = graphql `
    query {
        design: file(relativePath: {eq: "img_designer.png"}) {
            relativePath
            childImageSharp {
              fluid(maxWidth: 255) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
        ui: file(relativePath: {eq: "img_ui.png"}) {
            relativePath
            childImageSharp {
              fluid(maxWidth: 255) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
        engineer: file(relativePath: {eq: "img_engineer.png"}) {
            relativePath
            childImageSharp {
              fluid(maxWidth: 255) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
    }
`