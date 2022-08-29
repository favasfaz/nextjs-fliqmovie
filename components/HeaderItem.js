import React from 'react'

function HeaderItem({Icon,title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group'>
        <Icon className='h-8 group-hover:animate-bounce'/>
        <h4 className='opacity-0 group-hover:opacity-100'>{title}</h4>
   
    </div>
  )
}

export default HeaderItem