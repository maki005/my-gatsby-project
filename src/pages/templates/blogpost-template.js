import React from "react"
import '../styles/style.scss'
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"


const options = {
    renderNode: {
        // 画像を表示する
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <img 
                src={node.data.target.fields.file["ja-JP"].url}
                alt={
                    node.data.target.fields.description
                    ? node.data.target.fields.description["ja-JP"]
                    : node.data.target.fields.title["ja-JP"]
                }
            />
        ),
    },
    // 開業をbrにする
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
query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
        title
        category {
            category
            categorySlug
        }
        content {
            json
        }
    }
}`