import React from "react"

import Header from "./header.js"
import Footer from "./footer.js"

import '../styles/style.scss'

export default ({ children }) => (
    <div className="over_hidden">
        <Header />

        {children}

        <Footer />
    </div>
)