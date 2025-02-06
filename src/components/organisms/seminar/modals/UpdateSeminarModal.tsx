import React, { ChangeEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useUpdateSeminarMutation } from "store/seminars/seminars.api"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS, VIEW } from "utils"
import { useModalContext } from "hooks"

import { Button, Input, Modal, Textarea } from "components"

import styles from "./Modals.module.scss"

const UpdateSeminarModal: React.FC = () => {
   const { id } = useParams()
   const { setCurrentModal, data } = useModalContext(MODAL_CONTEXT_KEY.SEMINAR)

   const [values, setValues] = useState<SeminarItemITF>(data)

   const [updateSeminar, { isSuccess, isLoading }] = useUpdateSeminarMutation()

   useEffect(() => {
      if (isSuccess) {
         setCurrentModal(SEMINAR_MODALS.CLOSE)
      }
   }, [isSuccess])

   const valueHandle = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target
      setValues({ ...values, [name]: value })
   }

   return (
      <Modal title="Редактирование данных">
         <div className={styles.seminar_update_modal_content}>
            <div className={styles.seminar_update_modal_content__inputs}>
               <Input label="Фото" name="photo" value={values.photo} onChange={(e) => valueHandle(e)} />
               <Input name="title" label="Заголовок" value={values.title} onChange={(e) => valueHandle(e)} />
               <Textarea
                  label="Описание"
                  name="description"
                  value={values.description}
                  onChange={(e) => valueHandle(e)}
               />
            </div>
            <div className={styles.seminar_update_modal_content__btns}>
               <Button
                  disabled={isLoading}
                  view={VIEW.SECONDARY}
                  onClick={() => updateSeminar({ id, details: values })}
               >
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
