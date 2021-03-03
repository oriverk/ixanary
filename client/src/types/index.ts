import { Dispatch, SetStateAction } from "react"

export type SidebarPropsType = {
  isOpen: boolean,
  setSidebarState: Dispatch<SetStateAction<boolean>>
}