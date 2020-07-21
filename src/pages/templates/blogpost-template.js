import React from "react"
import '../styles/style.scss'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import useContentfulImage from "../../utils/useContentfulImage"


const options = {
    renderNode: {
        // 画像を表示する
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <img 
                fluid={useContentfulImage(node.data.target.fields.file["ja-JP"].url)}
                alt={
                    node.data.target.fields.description
                    ? node.data.target.fields.description["ja-JP"]
                    : node.data.target.fields.title["ja-JP"]
                }
            />

            
        ),
    },
    // 改行をbrにする
    renderText: text => {
        return text.split("\n").reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
}

export default function Work({ data }) {
    return (
        <div>
            <div>
                eyecatch
                <figure>
                    {/* アイキャッチがpublishやないとエラー？ */}
                    <Img
                        fluid={data.contentfulBlogPost.eyecatch.fluid}
                        alt={data.contentfulBlogPost.eyecatch.description}
                    />
                </figure>

            </div>

            <article>
                <h1>{data.contentfulBlogPost.title}</h1>
                <aside>
                    <ul>
                        <li>{data.contentfulBlogPost.category.category}</li>
                    </ul>
                </aside>

                <div>
                    {documentToReactComponents(data.contentfulBlogPost.content.json,
                    options    
                    )}
                </div>

            </article>
        </div>
    )
}

export const query  = graphql`
query($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
        title
        category {
            category
            categorySlug
        }
        eyecatch {
            fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
            }
            description
            file {
                details {
                    image {
                        width
                        height
                    }
                }
                url
            }
        }
        content {
            json
        }
    }
}`