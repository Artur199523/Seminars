import React, { ReactNode } from "react"
import classNames from "classnames"

import { VIEW } from "utils"

import styles from "./Button.module.scss"

interface ButtonITF {
   view?: VIEW
   children: ReactNode
   disabled?: boolean
   className?: string
   onClick: () => void
   type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonITF> = ({ children, onClick, type = "button", disabled = false, view = VIEW.PRIMARY }) => {
   const buttonStyle = classNames(styles.custom_button, styles[view])

   return (
      <button type={type} onClick={onClick} disabled={disabled} className={buttonStyle}>
         {children}
      </button>
   )
}

export default Button
