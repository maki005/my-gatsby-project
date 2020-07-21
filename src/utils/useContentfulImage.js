import { useStaticQuery, graphql } from "gatsby"

export default assetUrl => {
    const { allContentfulAsset } = useStaticQuery(graphql`
    query {
        allContentfulAsset {
            nodes {
                file {
                    url
                }
                fluid(maxWidth: 800) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
    `)
    return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}