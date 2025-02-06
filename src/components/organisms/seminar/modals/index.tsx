import React from "react"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS } from "utils"
import { useModalContext } from "hooks"

import DeleteSeminarModal from "./DeleteSeminarModal"
import UpdateSeminarModal from "./UpdateSeminarModal"

const SeminarModals = () => {
   const { currentModal } = useModalContext(MODAL_CONTEXT_KEY.SEMINAR)
   return (
      <React.Fragment>
         {
            {
               [SEMINAR_MODALS.SEMINAR_UPDATE]: <UpdateSeminarModal />,
               [SEMINAR_MODALS.SEMINAR_DELETE]: <DeleteSeminarModal />,
            }[currentModal]
         }
      </React.Fragment>
   )
}

export default SeminarModals
