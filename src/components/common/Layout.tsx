import { useState } from 'react'

import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'

/* reference: https://tailwindcomponents.com/component/dashboard-template */
/* reference code: https://github.com/tailwindcomponents/dashboard */

export const Layout: React.FC = ({children}) => {
  const [isOpen, setSidebarState] = useState(false)

  return (
    <div className='flex h-screen bg-gray-200'>
      {/* <div onClick={() => setSidebarOpen(false)} className={`${isSidebarOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}></div> */}
      <div onClick={() => setSidebarState(false)} className={`${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-75 transition-opacity`} />
      <Sidebar sidebarProps={{ isOpen }} />
      <div className='flex-1 flex flex-col overflow-hidden'>
      <Header sidebarProps={{ setSidebarState }} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}