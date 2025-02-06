import React from "react"

import styles from "./ErrorContainer.module.scss"

const ErrorContainer: React.FC<{ message: string }> = ({ message }) => (
   <div className={styles.error_container}>
      <span>{message}</span>
   </div>
)

export default ErrorContainer
