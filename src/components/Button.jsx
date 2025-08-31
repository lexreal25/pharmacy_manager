import React from 'react'
import './Button.css'


 const Button = (props) => {
  return (
    <button className='btn-general'>{props.name}</button>
  )
}

export default Button;