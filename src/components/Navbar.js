import React from 'react'

function Navbar({onRouteChange}) {
  return (
    <nav className='flex justify-end items-center'>
        <p onClick ={ () => onRouteChange('signin')}className='m-4 text-lg cursor-pointer underline hover:opacity-50'> Sign Out</p>
    </nav>
  )
}

export default Navbar