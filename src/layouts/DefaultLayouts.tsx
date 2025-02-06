import React from "react"

import { Footer, Header } from "components"

const DefaultLayouts: React.FC<ChildrenProps> = ({ children }) => (
   <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
   </React.Fragment>
)

export default DefaultLayouts
