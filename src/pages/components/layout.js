import React from "react"

import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
    <div>
        <Header />

        {children}

        <Footer />
    </div>
)