import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className={`sm:p-12 md:p-1 md:mb-10 flex justify-center items-center w-full`}>
      {
      category!==null 
      ? <p className='sm:text-xl md:text-3xl text-gray-500'>{`${category}/`} </p>
      : <></>
      }
      <p className='sm:text-xl md:text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header