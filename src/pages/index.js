import React from "react"
import './styles/style.scss'
import { graphql } from "gatsby"

export default function Home() {
  return (
    <div>
      <section id="eyecatch">
        <h1>Hello Gatsby!</h1>
      </section>

      <section className="wrap">
        <h2>Works</h2>
          <ul>
            <li>自社採用サイト</li>
            <li>商品検索システム</li>
            <li>ナレッジ検索システム</li>
            <li>契約管理システム</li>
          </ul>
      </section>

      <section className="wrap">
        <h2>Profile</h2>
      </section>

      <section className="wrap">
        日報・Twitter
      </section>

      <img src="/images/news.png" alt="アイコン" />
    </div>
  )
}
