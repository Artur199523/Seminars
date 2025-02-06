import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useDeleteSeminarMutation } from "store/seminars/seminars.api"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS, VIEW } from "utils"
import { useModalContext } from "hooks"

import { Button, Modal } from "components"

import styles from "./Modals.module.scss"

const UpdateSeminarModal: React.FC = () => {
   const navigate = useNavigate()

   const { id } = useParams()
   const { setCurrentModal } = useModalContext(MODAL_CONTEXT_KEY.SEMINAR)

   const [deleteSeminar, { isSuccess, isLoading }] = useDeleteSeminarMutation()

   useEffect(() => {
      if (isSuccess) {
         navigate("/")
         setCurrentModal(SEMINAR_MODALS.CLOSE)
      }
   }, [isSuccess])

   return (
      <Modal title="Редактирование данных">
         <div className={styles.seminar_update_modal_content}>
            <div className={styles.seminar_update_modal_content__inputs}>

            </div>
            <div className={styles.seminar_update_modal_content__btns}>
               <Button disabled={isLoading} view={VIEW.SECONDARY} onClick={() => deleteSeminar(id)}>
                  Подтверждать
               </Button>
               <Button disabled={isLoading} view={VIEW.SECONDARY} onClick={() => setCurrentModal(SEMINAR_MODALS.CLOSE)}>
                  Отклонять
               </Button>
            </div>
         </div>
      </Modal>
   )
}

export default UpdateSeminarModal
