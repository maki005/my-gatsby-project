import React from "react"
import './styles/style.scss'
import { graphql, Link } from "gatsby"

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
            {data.allContentfulBlogPost.edges.map(({ node }) => (
              <Link to={`/work/post/${node.slug}`}>
              <li key={node.id}>{node.title}</li>
              </Link>
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
    edges {
      node {
        title
        id
        slug
      }
    }
  }
}
`
