import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "./store"

import reportWebVitals from "./reportWebVitals"
import { Toast } from "./components"
import App from "./App"

import "./assets/styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
   <Provider store={store}>
      <App />
      <Toast />
   </Provider>,
)

reportWebVitals()
