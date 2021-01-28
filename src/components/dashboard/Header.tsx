import React from 'react';
import { IconContext } from "react-icons"
import { MdSearch, MdNotificationsNone } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"

type Props = {
  setSidebarOpen: (isOpen:boolean) => void
}

export const Header: React.FC<Props> = ({ setSidebarOpen }) => {
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
              {/* notification icon */}
              {/* <button onClick={()=>setNotification(!notification)} className="flex mx-4 text-gray-600 focus:outline-none">
                <IconContext.Provider value={{ className: 'h-6 w-6' }}>
                  <MdNotificationsNone/>
                </IconContext.Provider>
              </button>
              <div onClick={()=>setNotification(false)} className={`fixed inset-0 h-full w-full z-10 ${notification ? '' : 'hidden'}`}></div> */}
              {/* dropped window of notification */}
              {/* <div className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10 ${notification ? '' : 'hidden'}`}>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                  <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar" />
                  <p className="text-sm mx-2">
                    <span className="font-bold">Sara Salah</span> replied on the <span className="font-bold text-indigo-400">Upload Image</span> artical . 2m
                  </p>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                  <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="avatar" />
                  <p className="text-sm mx-2">
                    <span className="font-bold">Slick Net</span> start following you . 45m
                  </p>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                  <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="avatar" />
                  <p className="text-sm mx-2">
                    <span className="font-bold">Jane Doe</span> Like Your reply on <span className="font-bold text-indigo-400">Test with TDD</span> artical . 1h
                  </p>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                  <img className="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80" alt="avatar" />
                  <p className="text-sm mx-2">
                    <span className="font-bold">Abigail Bennett</span> start following you . 3h
                  </p>
                </a>
              </div> */}
            </div>
            <div className="relative">
              {/* user icon */}
              {/* <button onClick={()=>setDropdownOpen(!dropdownOpen)} className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80" alt="Your avatar" />
              </button>
              <div onClick={() => setDropdownOpen(false)} className={`fixed inset-0 h-full w-full z-10 ${dropdownOpen ? '' : 'hidden'}`}></div> */}
              {/* dropped window of user icon */}
              {/* <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 ${dropdownOpen ? '' : 'hidden'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
              </div> */}
            </div>
          </div>
      </header>
  );
}
