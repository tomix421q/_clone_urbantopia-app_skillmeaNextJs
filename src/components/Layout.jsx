import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='px-10 min-h-screen'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
