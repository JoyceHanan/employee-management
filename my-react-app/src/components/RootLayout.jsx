import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen mx-16 p-20 bg-green-200'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout