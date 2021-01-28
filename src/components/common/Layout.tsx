import React, { useState, FC } from 'react'
import Link from 'next/link'

import { links } from '../../constant/links'

import { Header } from './Header'
import { Aside } from './Aside'
import { Footer } from './Footer'
import { useThemeContext } from '../../hooks/useTheme'

export const Layout: FC = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext()
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)

  return (
    <>
      <div className='w-40 min-h-screen hidden'>
        <div className='m-3'>
          <h2 className='mt-2'>Menu</h2>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.url}>
                  <Link href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 text-white'>
        <Header>
          <button className='' aria-label='open side menu' onClick={()=>setOpen(true)}>
            button
          </button>
          <button className='' aria-label='toggle theme' onClick={()=>toggleTheme(theme)}>
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </Header>
        <main className='border-2 border-solid border-blue-500 flex flex-grow flex-row'>
          <Aside />
          <div className='contents boder-2 border-solid border-yellow-400 flex-col'>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
