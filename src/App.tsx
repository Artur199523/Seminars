import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { routes } from "./routes/routes"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {React.Children.toArray(
               routes.map(({ path, element, layout: Layout }) => {
                  // Render routes dynamically
                  if (Layout) {
                     return <Route path={path} element={<Layout>{element}</Layout>} />
                  }

                  // Render routes without layouts
                  return <Route key={path} path={path} element={element} />
               }),
            )}
         </Routes>
      </BrowserRouter>
   )
}

export default App
