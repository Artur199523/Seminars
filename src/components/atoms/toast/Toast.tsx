import React from "react"
import { ToastContainer } from "react-toastify"

const Toast = () => (
   <ToastContainer
      closeOnClick
      rtl={false}
      draggable
      theme="dark"
      autoClose={5000}
      pauseOnFocusLoss
      newestOnTop={false}
      position="top-right"
      pauseOnHover={false}
      hideProgressBar={false}
   />
)

export default Toast
