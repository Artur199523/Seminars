import { toast } from "react-toastify"
import { NOTIFICATION } from "utils"

export const showNotification = (text: string, type: NOTIFICATION) => {
   toast(text, { type: type })
}
