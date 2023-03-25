import React from 'react';

function NavGraphic( {children}) {
  return (
    <nav className='w-full py-1 bg-bgComponent rounded-md overflow-x-auto md:py-2'>
      <ul className='flex flex-row flex-nowrap w-fit px-1 gap-x-4 md:px-2'>
        {children}
      </ul>
    </nav>
  )
}

export default NavGraphic;