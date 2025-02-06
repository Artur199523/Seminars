import React from "react"
import { useParams } from "react-router-dom"

import { useGetSeminarQuery } from "store/seminars/seminars.api"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS } from "utils"
import { useModalContext } from "hooks"

import { Button, SeminarModals } from "components"

import styles from "./Seminar.module.scss"

const Seminar: React.FC = () => {
   const { id } = useParams()
   const { setCurrentModal, setData } = useModalContext(MODAL_CONTEXT_KEY.SEMINAR)

   const { data, isSuccess } = useGetSeminarQuery(id)

   const edit = () => {
      setCurrentModal(SEMINAR_MODALS.SEMINAR_UPDATE)
      setData(data)
   }

   return (
      <React.Fragment>
         {isSuccess && data && (
            <div className={styles.seminar}>
               <img src={data.photo} alt={data.title} className={styles.image} />
               <div className={styles.seminar__info}>
                  <h1 className={styles.seminar__info__title}>{data.title}</h1>
                  <div className={styles.seminar__info__details}>
                     <span>Описание</span>
                     <p>{data.description}</p>
                     <span>Время</span>
                     <p>
                        {data.date} - {data.time}
                     </p>
                  </div>
                  <div className={styles.seminar__info_btns}>
                     <Button onClick={edit}>Обновлять</Button>
                     <Button onClick={() => setCurrentModal(SEMINAR_MODALS.SEMINAR_DELETE)}>Удалить</Button>
                  </div>
               </div>
            </div>
         )}
         <SeminarModals />
      </React.Fragment>
   )
}

export default Seminar
