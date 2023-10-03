import React from 'react'

const MenuItem = ({title, price, desc}) => {
  return (
    <div className='w-1/4 '>
      <div className=' '>
      <h1 className='text-white'>{title}</h1>
      <p className='text-orange-400'>{desc}</p>
      </div>
      <h1 className='text-orange-200'>{price}</h1>
    </div>
  )
}

export default MenuItem