import React from 'react'

export const Navbar = () => {
  return (
    <div className='box-border container mx-auto mt-10'>
        <div className='flex flex-row'>
            <div className='basis-1/2'>Jay-Weather</div>
            <div className='basis-1/3'>
                <input className='w-full border-solid rounded-sm border-1 border-sky-700' type="text" />
            </div>
        </div>
    </div>
  )
}

export default Navbar;
