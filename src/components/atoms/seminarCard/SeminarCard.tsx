import React from "react"

import styles from "./Seminar.module.scss"

const SeminarCard: React.FC<{ seminar: SeminarItemITF; onClick: CallableFunction }> = ({ seminar, onClick }) => {
   return (
      <div onClick={() => onClick()} className={styles.card}>
         <img src={seminar.photo} alt={seminar.title} className={styles.image} />
         <h2 className={styles.title}>{seminar.title}</h2>
         <div className={styles.info_block}>
            <p className={styles.info_block__description}>{seminar.description}</p>
            <div className={styles.info_block__details}>
               <span>{seminar.date}</span>
               <span>{seminar.time}</span>
            </div>
         </div>
      </div>
   )
}

export default SeminarCard
