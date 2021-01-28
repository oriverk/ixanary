import React from 'react';

import { useThemeContext } from '../hooks/useTheme'

const theme = () => {
  const { theme, toggleTheme } = useThemeContext()
  return (
    <div className='bg-blue-600 dark:bg-gray-800'>
      <button key='theme' onClick={() => toggleTheme(theme)} aria-label='change theme'>
        {theme === 'light' ? '🌞': '🌙'}
      </button>
    </div>
  );
}

export default theme;
