import React from 'react'

function PageSubHeader({textContent}) {
  return (
    <div className='h-24 py-24 text-center bg-[#F8F8F8] mb-10'>
    <h2 className='text-2xl font-bold'>{textContent}</h2>
  </div>
  )
}

export default PageSubHeader