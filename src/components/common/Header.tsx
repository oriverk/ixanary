import Link from 'next/link'

import { IconContext } from "react-icons"
import { MdSearch } from "react-icons/md"
import { FaMoon, FaSun } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"

import { SidebarPropsType } from '../../types'

import { useThemeContext } from '../../hooks/useTheme'

type Props = {
  sidebarProps: Pick<SidebarPropsType, 'setSidebarState'>
}

export const Header: React.FC<Props> = ({ sidebarProps }) => {
  const { theme, toggleTheme } = useThemeContext()
  const { setSidebarState } = sidebarProps

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button onClick={() => setSidebarState(true)} className="text-gray-500 lg:hidden" aria-label='open side navigation drawer'>
        {/* <button onClick={()=>setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden"> */}
          <IconContext.Provider value={{ className: 'h-6 w-6' }}>
            <GiHamburgerMenu/>
          </IconContext.Provider>
        </button>
        <div className='relative mx-4 lg:mx-0 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'>
          <Link href='/search'>
            <a>
              <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                <IconContext.Provider value={{ className: 'h-5 w-5' }}>
                  <MdSearch />
                </IconContext.Provider>
              </span>
              <span className='pl-10 pr-4'>
                Search
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button onClick={() => toggleTheme(theme)} className='flex mx-4 text-yellow-500 focus:outline-none' aria-label='change site color theme'>
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </header>
  );
}
