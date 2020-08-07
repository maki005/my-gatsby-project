import React from "react"

import "./styles/style.scss"
import Layout from "../pages/components/layout.js"

export default function notfound () {
    return (
        <Layout>
            <h1 className="title_404">404</h1>
            <p>お探しのページはみつかりませんでした</p>
        </Layout>
    )
}