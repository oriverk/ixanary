import { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

type ContextProps = {
  isSidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext({} as ContextProps)

const SidebarProvider: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebarContext = () => useContext(SidebarContext)

export { SidebarProvider, useSidebarContext }
