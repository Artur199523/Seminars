import React, { createContext, useState } from "react"

import { ModalContextType, ContextKeys, ModalProviderProps } from "./type"
import { MODAL_CONTEXT_KEY, SEMINAR_MODALS } from "utils"

export const ModalContexts: {
   [K in ContextKeys]: React.Context<ModalContextMap[K] | undefined>
} = {
   [MODAL_CONTEXT_KEY.SEMINAR]: createContext<ModalContextType<SEMINAR_MODALS>>(undefined),
}

export type ModalContextMap = {
   [MODAL_CONTEXT_KEY.SEMINAR]: ModalContextType<SEMINAR_MODALS>
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ type, children }) => {
   const ModalContext = ModalContexts[type]

   const [currentModal, setCurrentModal] = useState<string>("")

   return <ModalContext.Provider value={{ currentModal, setCurrentModal }}>{children}</ModalContext.Provider>
}
