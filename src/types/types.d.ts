import { ReactNode } from "react"

// Declare a global type or interface
declare global {
   type ChildrenProps = {
      children: ReactNode
   }

   interface SeminarItemITF {
      id: number
      date: string
      time: string
      title: string
      photo: string
      description: string
   }
}

// Ensures this is treated as a module so the file is included
export {}
