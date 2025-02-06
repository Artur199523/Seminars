import React, { FC } from "react"
import classNames from "classnames"

import { VIEW } from "utils"

import styles from "./Input.module.scss"

interface InputITF {
   view?: VIEW
   name: string
   value: string
   label?: string
   placeholder?: string
   type?: React.HTMLInputTypeAttribute
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void // change handler
}

const Input: FC<InputITF> = ({ view = VIEW.PRIMARY, type = "text", name, label, value, placeholder, onChange }) => {
   const inputStyle = classNames(styles.input_wrapper, styles[view])

   return (
      <div className={inputStyle}>
         {label && (
            <label htmlFor={name} className={styles.input_wrapper__label}>
               {label}
            </label>
         )}
         <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input_wrapper__field}
         />
      </div>
   )
}

export default Input
