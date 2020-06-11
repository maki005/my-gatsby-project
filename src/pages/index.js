import React from "react"
import './styles/style.scss'
import { graphql } from "gatsby"

import Header from "../pages/components/header.js"
import Footer from "../pages/components/footer.js"

export default function Home({ data }) {
  return (
    <div>
      <Header />

      <section id="eyecatch">
        <h1>Hello Gatsby!</h1>
      </section>

      <section className="wrap">
        <h2>Works</h2>
          <ul>
            {data.allContentfulBlogPost.nodes.map(({ title }) => (
            <li>{title}</li>
          ))}
          </ul>
      </section>

      <section className="wrap">
        <h2>Profile</h2>
      </section>

      <section className="wrap">
        日報・Twitter
      </section>

      <img src="/images/news.png" alt="アイコン" />

      <Footer />
    </div>

  )
}

export const query = graphql`
query {
  allContentfulBlogPost(sort: {fields: id, order: DESC}) {
    nodes {
      title
    }
  }
}
`
