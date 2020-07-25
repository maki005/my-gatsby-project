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

      <section className="wrap wrap_work">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Link to ={`/work/post/${node.slug}`}>
          <figure className="img_workTop">
              <Img
                fluid={node.eyecatch.fluid}
                alt="画像説明"
              />
          </figure>
          </Link>
      ))}
      </section>

      <section className="wrap">
        <h2 className="sub_title">できること</h2>
        <div className="d_flex">
          <div className="card">
            <h3>UIデザイン</h3>
            <p>BtoB自社製品のデザインを担当しています。Adobe XDでのモックからHTML/CSSまでを担当</p>
          </div>
          <div className="card">
            <h3>Webデザイン</h3>
            <p>自社システムの紹介サイトを管理WordPressで運営していました。LPや自社採用ページなどを作成</p>
          </div>
          <div className="card">
            <h3>エンジニアと</h3>
            <p>エンジニアと共同でプロジェクトをすすめることがほとんど。ローカル環境構築やGithubでのソース管理など。</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2 className="sub_title">プロフィール</h2>
        <p>
          高知大学人文学部卒業。転職活動をするうちにこれからの動向を検討し、IT業界への就職を決め
          未経験で現在の会社に新卒入社。Web UIデザイナーとして自社システムのUIを担当。
          知らないことを知れる、できないことができるということに喜びを感じる人間です。
        </p>
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
