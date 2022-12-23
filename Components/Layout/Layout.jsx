import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div className='relative min-h-screen'>
      <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout