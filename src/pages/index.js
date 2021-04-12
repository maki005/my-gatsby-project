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
