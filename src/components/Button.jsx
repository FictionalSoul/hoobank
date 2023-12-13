import React from 'react'

const Button = ({ style }) => {
  return (
    <div type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${style} rounded-[10px]`}>Get Started</div>
  )
}

export default Button