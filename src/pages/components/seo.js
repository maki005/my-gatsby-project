import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    lang
                    description
                }
            }
        }
    `)

    const title = props.pagetitle || data.site.siteMetadata.title

    const description = props.pagedesc || data.site.siteMetadata.description

    return (
    <Helmet>
        <html lang={data.site.siteMetadata.lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
    )
}