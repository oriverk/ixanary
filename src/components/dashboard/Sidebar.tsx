import React, { useContext } from 'react'

import { IconContext } from "react-icons"
import { MdDashboard, MdSearch, MdNotificationsNone } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"

import { SidebarContext } from '../../pages/dashboard'

type Props = {
  isOpen: boolean
}

// MdDashboard
export const Sidebar: React.FC<Props> = ({ children, isOpen }) => {
  const { setSidebarOpen } = useContext(SidebarContext)

  // const [dropdownOpen, setDropdownOpen] = useState(false)
  // const [notification, setNotification] = useState(false)
  return (
    <div className="flex h-screen bg-gray-200">
      {/* sidebar */}
      <div onClick={() => setSidebarOpen(false)} className={`${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}></div>
      <div className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in' } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <IconContext.Provider value={{ className: 'h-12 w-12' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className="text-white text-2xl mx-2">Dashboard</span>
          </div>
        </div>
        <nav className="mt-10">
          <a className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100" href="/">
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className="mx-3">Dashboard</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/ui-elements">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
            </svg>
            <span className="mx-3">UI Elements</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/tables">
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className="mx-3">Tables</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/forms">
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className="mx-3">Forms</span>
          </a>
        </nav>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}