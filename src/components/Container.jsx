import React, { Children } from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-324 mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container