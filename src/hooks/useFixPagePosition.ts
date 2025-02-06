import { useEffect } from "react"

export const useFixPagePosition = (isFix: boolean) => {
   useEffect(() => {
      if (isFix) {
         document.body.style.overflow = "hidden"
         document.body.style.paddingRight = "7px"
      }

      return () => {
         document.body.style.overflow = "unset"
         document.body.style.paddingRight = "0"
      }
   }, [isFix])
}
