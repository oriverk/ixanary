import { useState } from 'react'
import { IconContext } from "react-icons"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FiFilter } from "react-icons/fi"

import { Layout } from '../components/common/Layout'
import { Top } from '../components/common/Top'
// import { Table } from '../components/common/Table'

const Component: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
        <div className="mt-8"></div>
        <Top />
        <div className="rounded-lg flex mt-4">
          <div className="relative ml-auto" >
             {/* @click.prevent="open = !open" */}
            <button onClick={()=>setOpen(isOpen? false:true)}
							className="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4">
              <IconContext.Provider value={{ className: 'h-5 w-5 md:hidden' }}>
                <FiFilter />
              </IconContext.Provider>
							<span className="hidden md:block">Display</span>
              <IconContext.Provider value={{ className: 'h-6 w-6 ml-1' }}>
                <MdKeyboardArrowDown/>
              </IconContext.Provider>
						</button>
            <div className={`${isOpen ? '' : 'hidden'} z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden`}>
              <label className="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2">
                <div className="text-teal-600 mr-3">
                  <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline" />
                </div>
                <div className="select-none text-gray-700">hoge</div>
              </label>
              <label className="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2">
                <div className="text-teal-600 mr-3">
                  <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="select-none text-gray-700"></div>
              </label>
              <label className="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2">
                <div className="text-teal-600 mr-3">
                  <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="select-none text-gray-700"></div>
              </label>
						</div>
					</div>
				</div>
        {/* <Table /> */}
      </div>
    </Layout>
  )
}

export default Component