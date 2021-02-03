import { useState } from 'react'

import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'

/* reference: https://tailwindcomponents.com/component/dashboard-template */
/* reference code: https://github.com/tailwindcomponents/dashboard */

export const Layout: React.FC = ({children}) => {
  const [isOpen, setSidebarState] = useState(false)

  return (
    <div className="flex h-screen bg-gray-200">
      <div onClick={() => setSidebarState(false)} className={`${isOpen ? 'block': 'hidden' } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`} />
      {/* <div onClick={() => setSidebarState(false)} className={`${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-75 transition-opacity`} /> */}
      <Sidebar sidebarProps={{ isOpen }} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarProps={{ setSidebarState }} />
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <main className='bg-blue-400 max-w-4xl mx-auto p-3'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}