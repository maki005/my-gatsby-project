import React from "react"
import './styles/style.scss'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../pages/components/layout.js"
import SEO from "../pages/components/seo.js"
import Eyecatch from "../pages/components/eyecatch.js"
import Feature from "../pages/components/feature.js"
import FAQ from "../pages/components/faq.js"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <Eyecatch />

      <section className="c-wrap_small wrap_attention">
        <div className="attention">
          <h3 className="attention_title">attention</h3>
          <p className="c-text_normal">
            このポートフォリオサイトでは、システム紹介サイトをモデルに、私自身をシステムのように捉え、紹介しているサイトです。特徴やよくある質問など、一般のポートフォリオサイトとは少し趣旨が異なるコンテンツもありますが、できるだけ私を知ってもらいたいという思いから作成しました。
          </p>
          </div>
      </section>

      <section className="c-wrap_large">
      <a id="profile"></a>
        <div className="wrap_profile">
          <div>
            <div className="section_title profile_title">足立真規&nbsp;&nbsp;<span className="name_e">Maki Adachi</span></div>
            <p className="c-text_normal">
              1994年生まれ<br />
              高知大学卒業後、BtoB SaaSの開発を行うキー・ポイント株式会社に新卒で入社。インハウスデザイナーとして勤務。システムUIから、Webサイト、展示会用のフライヤーなどデザイン全般を担当。自社プロダクトサイトでは機能説明やシステムの紹介のためのライティングも行うほか、企画やコンテンツの制作なども行っています。
            </p>
          </div>
          <img src="/images/img_profile.png" />
        </div>
      </section>

      <Feature />

      <section className="work">
        <a id="work"></a>
        <h2 className="section_title">事例</h2>
          <div className="innerWrap_work">
              {data.allContentfulBlogPost.edges.map(({ node }) => (
                  <div key={node.id} className="wrap_post">
                  <Link to ={`/work/post/${node.slug}`}>
                  <figure className="img_workTop">
                      <Img
                          fluid={node.eyecatch.fluid}
                          alt="画像説明"
                          style={{ height: "100%" }}
                      />
                  </figure>
                  </Link>
                  <h3>{node.title}</h3>
                  </div>
              ))}
          </div>
      </section>

      <FAQ />

    </Layout>

  )
}

export const query = graphql`
query {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        id
        eyecatch {
          fluid(maxWidth: 2000){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`
