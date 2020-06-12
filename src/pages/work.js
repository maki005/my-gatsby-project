import React from "react"
import './styles/style.scss'
import { graphql, Link } from "gatsby"

export default function Work({ data }){
    return (
        <div>
            <ul>
            {data.allContentfulBlogPost.edges.map(({ node }) => (
                <Link to={`/work/post/${node.slug}`}>
                <li key={node.id}>{node.title}</li>
                </Link>
            ))}
            </ul>
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