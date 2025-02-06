import React from "react"
import classNames from "classnames"
import * as ReactDOM from "react-dom"

import { useFixPagePosition } from "hooks"
import { SIZE } from "utils"

import styles from "./Modal.module.scss"

interface ModalITF {
   size?: SIZE
   title: string
   children: React.ReactNode
}

const Modal: React.FC<ModalITF> = ({ size = SIZE.MEDIUM, title, children }) => {
   const modalBlockStyle = classNames(styles.modal__block, styles[size])

   useFixPagePosition(true)

   return ReactDOM.createPortal(
      <div className={styles.modal}>
         <div className={modalBlockStyle}>
            <h3>{title}</h3>
            <div className="modal__block__content">{children}</div>
         </div>
      </div>,
      document.querySelector<any>("body"),
   )
}

export default Modal
