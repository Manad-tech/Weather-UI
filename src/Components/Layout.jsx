import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div className='bg-[#D69E36] p-4'>
      {children}
    </div>
  )
}
