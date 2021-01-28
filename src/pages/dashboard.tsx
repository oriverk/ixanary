import React, { useState, createContext, Dispatch, SetStateAction } from 'react'


import { Sidebar, Header, Top, Table } from '../components/dashboard'

/* reference: https://tailwindcomponents.com/component/dashboard-template */
/* reference code: https://github.com/tailwindcomponents/dashboard */

type SetSidebarOpenProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = createContext<SetSidebarOpenProps>({
  setSidebarOpen: () => {}
})

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <SidebarContext.Provider value={{ setSidebarOpen }}>
        <Sidebar isOpen={isSidebarOpen}>
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
              <div className="mt-8"></div>
              <Top />
              <Table />
            </div>
          </main>
        </Sidebar>
      </SidebarContext.Provider>
    </>
  );
}

export default Dashboard
