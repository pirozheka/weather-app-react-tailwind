import React from 'react';
import search from '../../assets/icons8-search.svg'

export const Navbar = () => {
  return (
    <div className='box-border container mx-auto mt-10'>
        <div className='flex flex-row justify-between'>
            <div className='basis-1/2'>Jay-Weather</div>
            <div className='basis-1/3'>
              <label className="relative block">
                  <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter city name..." type="text" name="search"/>
                      <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
                        <img src={ search } alt="search-icon" className='h-5 w-5' />
                      </span>
              </label>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
