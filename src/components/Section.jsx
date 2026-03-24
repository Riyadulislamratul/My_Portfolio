import React from 'react'

const Section = ({ children, className="" }) => {
  return (
    <div className={`mt-30 ${className}`}>
      {children}
    </div>
  )
}

export default Section