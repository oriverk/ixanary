import { IconContext } from "react-icons"
import { MdSearch } from "react-icons/md"
import { FaMoon, FaSun } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"


import { useThemeContext } from '../../hooks/useTheme'
import { useSidebarContext } from '../../hooks/useSidebar'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext()
  const { setSidebarOpen } = useSidebarContext()

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button onClick={()=>setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
          <IconContext.Provider value={{ className: 'h-6 w-6' }}>
            <GiHamburgerMenu/>
          </IconContext.Provider>
        </button>
        {/* input form */}
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <IconContext.Provider value={{ className: 'h-5 w-5' }}>
              <MdSearch/>
            </IconContext.Provider>
          </span>
          <input className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button onClick={() => toggleTheme(theme)} className='flex mx-4 text-yellow-500 focus:outline-none'>
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </header>
  );
}
