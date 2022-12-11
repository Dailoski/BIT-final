import React from 'react'
import './button.scss'

const Button = ({ name, btnClass, method }) => {
  return (
    <button className={btnClass} onClick={() => method()}>
      {/* onClick = {method} */}
      {name}
    </button>
  )
}

export default Button