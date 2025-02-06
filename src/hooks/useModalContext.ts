import React, { useContext } from "react"

import { ModalContextMap, ModalContexts } from "layouts/provider/ModalProvider"
import { ContextKeys } from "layouts/provider/type"

export const useModalContext = <T extends ContextKeys>(type: T): ModalContextMap[T] => {
   const ModalContext = ModalContexts[type] as React.Context<ModalContextMap[T] | undefined>

   return useContext(ModalContext)
}
