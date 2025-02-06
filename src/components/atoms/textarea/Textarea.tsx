import React from "react"
import classNames from "classnames"

import { VIEW } from "utils"

import styles from "./Textarea.module.scss"

interface TextareaITF {
   view?: VIEW
   name: string
   label?: string
   value: string
   placeholder?: string
   rows?: number
   cols?: number
   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void // Change handler
}

const Textarea: React.FC<TextareaITF> = ({
   view = VIEW.PRIMARY,
   name,
   label,
   value,
   placeholder,
   rows = 4,
   cols,
   onChange,
}) => {
   const textareaStyle = classNames(styles.textarea_wrapper, styles[view])
   return (
      <div className={textareaStyle}>
         {label && (
            <label htmlFor={name} className={styles.textarea_wrapper__label}>
               {label}
            </label>
         )}
         <textarea
            id={name}
            name={name}
            rows={rows}
            cols={cols}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.textarea_wrapper__field}
         />
      </div>
   )
}

export default Textarea
