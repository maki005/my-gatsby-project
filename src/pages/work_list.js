import React from "react"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../pages/components/layout.js"
import "./styles/style.scss"

export default function Work_list({ data }) {
    return(
        <div>
            <Layout>
                <h1 className="page_title">Work</h1>
                <div className="wrap_work">
                  <section>
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
                </div>
            </Layout>
        </div>
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
