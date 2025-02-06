import { FunctionComponent, ReactNode } from "react"
import { DefaultLayouts } from "layouts"

import { Seminars, Seminar } from "pages"
import { ModalProvider } from "../layouts/provider"
import { MODAL_CONTEXT_KEY } from "../utils"

interface RoutesITF {
   readonly path: string
   readonly element: ReactNode
   readonly layout: FunctionComponent<ChildrenProps>
   readonly label?: string
   readonly isShowInNav: boolean
}

export const routes: RoutesITF[] = [
   {
      path: "/",
      element: <Seminars />,
      layout: DefaultLayouts,
      isShowInNav: true,
      label: "Home",
   },
   {
      path: "/seminars",
      element: <Seminars />,
      layout: DefaultLayouts,
      isShowInNav: true,
      label: "Seminars",
   },
   {
      path: "/seminar/:id",
      element: (
         <ModalProvider type={MODAL_CONTEXT_KEY.SEMINAR}>
            <Seminar />
         </ModalProvider>
      ),
      layout: DefaultLayouts,
      isShowInNav: false,
   },
]
