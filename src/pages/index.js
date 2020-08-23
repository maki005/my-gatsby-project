import React from "react"
import './styles/style.scss'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../pages/components/layout.js"
import SEO from "../pages/components/seo.js"
import Eyecatch from "../pages/components/eyecatch.js"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <Eyecatch />

      <section className="wrap_work">
      <h2 className="sub_title">Work</h2>
      <div className="innerWrap_work">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to ={`/work/post/${node.slug}`}>
          <figure className="img_workTop">
              <Img
                fluid={node.eyecatch.fluid}
                alt="画像説明"
                style={{ height: "100%" }}
              />
          </figure>
          </Link>
        </div>
      ))}
      </div>
      </section>

      <section className="wrap">
        <h2 className="sub_title">できること</h2>
        <div className="d_flex">
          <div className="card ui">
            <h3>UIデザイン</h3>
            <p>自社製品のデザインを担当しています。Adobe XDでのモックからHTML/CSSまでを担当</p>
          </div>
          <div className="card web">
            <h3>Webデザイン</h3>
            <p>自社サイト及び製品紹介サイトをWordPressで管理。LPや自社採用ページなども作成</p>
          </div>
          <div className="card engineer">
            <h3>エンジニアと</h3>
            <p>エンジニアとプロジェクトを進める。ローカル環境構築やGithubでのソース管理なども業務内での経験。</p>
          </div>
        </div>
      </section>

      <section className="wrap wrap_profile">
        <h2 className="sub_title">プロフィール</h2>
        <div>
          <Link to={`/profile/`}><span className="link_profile">足立 真規</span></Link>
          <span>1994年生まれ　関西在住</span>
        </div>
        <p>
          高知大学人文学部卒業。転職活動をするうちにこれからの動向を検討し、IT業界への就職を決め
          未経験で現在の会社に新卒入社。Web UIデザイナーとして自社システムのUIを担当しています。
          エンジニアと共同で働きながらプログラムやネットワーク関連についても学びながら働いています。
          
          <br />
          知らないことを知れる、できないことができるということに喜びを感じる人間です。
        </p>
        <div className="wrap_tool">
          <span className="tool">Adobe XD</span>
          <span className="tool">Photoshop</span>
          <span className="tool">illustrater</span>
          <span className="tool">HTML</span>
          <span className="tool">CSS</span>
          <span className="tool">JavaScript</span>
          <span className="tool">GitHub</span>
          <span className="tool">WordPress</span>
        </div>
      </section>

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
