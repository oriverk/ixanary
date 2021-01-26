import React, { FC } from 'react';
import Link from 'next/link'

import { Header } from './Header'
import { Aside } from './Aside'
import { Footer } from './Footer'

import { links } from '../../constant/links'

export const Layout: FC = ({ children }) => {
  const sidebarID = 'sidebar-left'
  return (
    <>
      <div className='wrapper w-full'>
        <amp-sidebar id={sidebarID} side='left' layout='nodisplay' className='w-2/5'>
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
        </amp-sidebar>
        <div className='text-white border-2 border-solid border-green-400 container min-h-full flex flex-col'>
          <Header>
            {/* @ts-ignore */}
            <button className='swipe-button' on={`tap:${sidebarID}.toggle`} aria-label='open side menu'>
              button
            </button>
          </Header>
          <main className='border-2 border-solid border-blue-500 flex-1 flex flex-row'>
            <Aside />
            <div className='contents boder-2 border-solid border-yellow-400 flex-col'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
