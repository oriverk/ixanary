import React from 'react'
import Link from 'next/link'

import { links } from '../../constant/links'

export const Aside = () => {
  
  return (
    <aside className='border-2 border-solid border-yellow-500 w-200 sm:hidden'>
      aside links ↓
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
    </aside>
  );
}