import { Dispatch, SetStateAction } from "react"

export type SidebarPropsType = {
  sidebarProps: {
    isOpen?: boolean,
    setSidebarState?: Dispatch<SetStateAction<boolean>>
  }
}