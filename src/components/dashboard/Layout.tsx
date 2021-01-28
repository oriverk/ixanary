import { useSidebarContext } from '../../hooks/useSidebar'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

// import { Sidebar, Header, Top, Table } from '../dashboard'

/* reference: https://tailwindcomponents.com/component/dashboard-template */
/* reference code: https://github.com/tailwindcomponents/dashboard */

export const Layout: React.FC = ({children}) => {
  const { isSidebarOpen, setSidebarOpen } = useSidebarContext()

  return (
    <div className="flex h-screen bg-gray-200">
      <div onClick={() => setSidebarOpen(false)} className={`${isSidebarOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}></div>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
}