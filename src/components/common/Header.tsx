import React from 'react'

export const Header = ({children}) => {
  return (
    <header className='border-2 border-solid border-yellow-200 text-center'>
      Ixanary
      {children}
    </header>
  );
}