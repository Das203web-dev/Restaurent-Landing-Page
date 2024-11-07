import React from 'react'

function Layout({children}) {
  return (
    <div className='max-w-6xl mx-auto px-5 md:px-0'>{children}</div>
  )
}

export default Layout