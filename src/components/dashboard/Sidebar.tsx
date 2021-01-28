import { IconContext } from "react-icons"
import { MdDashboard } from "react-icons/md"

import { useSidebarContext } from '../../hooks/useSidebar'

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useSidebarContext()

  return (
    <div className={`${isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in' } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
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
          <IconContext.Provider value={{ className: 'h-6 w-6' }}>
            <MdDashboard/>
          </IconContext.Provider>
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
  )
}