import React from 'react'

const Button = ({id, label, onClick}) => {
  return (
    <button
    id={id} className={`w-[100px] h-[30px] bg-teal-600 text-white rounded hover:bg-teal-700`} onClick={onClick}>
    {label}
    </button>
  )
}

export default Button
