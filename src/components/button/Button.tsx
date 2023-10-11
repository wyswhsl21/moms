import React from 'react'
import './Button.scss';
const Button = ({children}:any) => {
  return (
   <button className='Button'>{children}</button>
  )
}

export default Button
