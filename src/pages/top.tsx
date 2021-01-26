import React, { FC } from 'react';

import Nav from '../components/nav'

const Top: FC = () => {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Ixanary
        </h1>
      </div>
    </div>
  );
}

export default Top;
