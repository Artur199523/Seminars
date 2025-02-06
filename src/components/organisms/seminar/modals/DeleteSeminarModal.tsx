import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useDeleteSeminarMutation } from "store/seminars/seminars.api"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS, VIEW } from "utils"
import { useModalContext } from "hooks"

import { Button, Modal } from "components"

import styles from "./Modals.module.scss"

const DeleteSeminarModal: React.FC = () => {
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
      <Modal title="Подтвердите удаление">
         <div className={styles.seminar_delete_modal_content}>
            <Button disabled={isLoading} view={VIEW.SECONDARY} onClick={() => deleteSeminar(id)}>
               Подтверждать
            </Button>
            <Button disabled={isLoading} view={VIEW.SECONDARY} onClick={() => setCurrentModal(SEMINAR_MODALS.CLOSE)}>
               Отклонять
            </Button>
         </div>
      </Modal>
   )
}

export default DeleteSeminarModal
