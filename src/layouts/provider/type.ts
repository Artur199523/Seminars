import React from "react"
import { ModalContextMap } from "./ModalProvider"

export type SeminarsModalT = "delete" | "edit" | "create"

export interface ModalContextType<T> {
   currentModal: string
   setCurrentModal: React.Dispatch<React.SetStateAction<T>>
}

export type ContextKeys = keyof ModalContextMap

export interface ModalProviderProps {
   type: ContextKeys
   children: React.ReactNode
}
