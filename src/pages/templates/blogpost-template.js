import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/post.module.css"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
// import useContentfulImage from "../utils/useContentfulImage"

import Layout from "../components/layout.js"


const options = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className={styles.sub_title}>
                {children}
            </h2>
        ),
        // 画像を表示する
        [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
                src={node.data.target.fields.file["ja-JP"].url}
                alt={
                    node.data.target.fields.description
                    ? node.data.target.fields.description["ja-JP"]
                    : node.data.target.fields.title["ja-JP"]
                }
                className={styles.article_img}
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
            <Layout>
            <div className={styles.eyecatch}>
                <figure>
                    {/* アイキャッチがpublishやないとエラー？ */}
                    <Img
                        fluid={data.contentfulBlogPost.eyecatch.fluid}
                        alt={data.contentfulBlogPost.eyecatch.description}
                        style={{ height: "100%" }}
                    />
                </figure>

            </div>

            <article className={styles.wrap}>
                {/* 記事タイトル */}
                <h1 className={styles.page_title}>{data.contentfulBlogPost.title}</h1>
                {/* 記事カテゴリー */}
                <aside>
                    <ul className={styles.category}>
                        <li>{data.contentfulBlogPost.category.category}</li>
                    </ul>
                </aside>

                <div className={styles.innerWrap_article}>
                    {documentToReactComponents(data.contentfulBlogPost.content.json,
                    options    
                    )}
                </div>

            </article>
            </Layout>
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