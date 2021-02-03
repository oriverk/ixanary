import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconContext } from 'react-icons'
import { MdDashboard } from 'react-icons/md'

import { routes } from '../../routes'
import { SidebarPropsType } from '../../types'

type Props = {
  sidebarProps: Pick<SidebarPropsType, 'isOpen'>
}

export const Sidebar: React.FC<Props> = ({ sidebarProps }) => {
  const { isOpen } = sidebarProps
  const router = useRouter()

  const isCurrentPath = (str: string) => (str === router.asPath)

  return (
    <div className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in' } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
      {/* <div className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto`}> */}
      <Link href={routes.top}>
        <a>
          <div className='flex items-center justify-center mt-8'>
            <div className='flex items-center'>
              <IconContext.Provider value={{ className: 'h-12 w-12' }}>
                <MdDashboard/>
              </IconContext.Provider>
              <span className='text-white text-2xl mx-2'>
                Ixanary
              </span>
            </div>
          </div>
        </a>
      </Link>
      <nav className='mt-10'>
        <Link href={routes.cards}>
          <a className={`flex items-center mt-4 py-2 px-6 ${isCurrentPath(routes.cards) ? 'bg-gray-700 bg-opacity-25 text-gray-100' : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100' } `}>
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className='mx-3'>
              武将一覧
            </span>
          </a>
        </Link>
        <Link href={routes.skills}>
          <a className={`flex items-center mt-4 py-2 px-6 ${isCurrentPath(routes.skills) ? 'bg-gray-700 bg-opacity-25 text-gray-100' : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100' } `}>
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className='mx-3'>
              スキル一覧
            </span>
          </a>
        </Link>
        <Link href={routes.unitSkills}>
          <a className={`flex items-center mt-4 py-2 px-6 ${isCurrentPath(routes.unitSkills) ? 'bg-gray-700 bg-opacity-25 text-gray-100' : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100' } `}>
            <IconContext.Provider value={{ className: 'h-6 w-6' }}>
              <MdDashboard/>
            </IconContext.Provider>
            <span className='mx-3'>
              部隊スキル一覧
            </span>
          </a>
        </Link>
      </nav>
    </div>
  )
}