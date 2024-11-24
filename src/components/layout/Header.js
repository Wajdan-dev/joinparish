import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='bg-white h-[80px] flex items-center'>
      <div className="max-w-[1280px] mx-auto w-full px-[15px] lg:px-0 flex justify-between items-center">
        <div className="logo">
          <h1 className='font-bold  text-black text-[40px]'>
            Parish
          </h1>
        </div>
        <div className="menu-items hidden lg:block">
          <ul className='flex gap-[30px] items-center'>
            <li className='text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer' >
              Home
            </li>
            <li className='text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer' >
              Mission
            </li>
            <li className='text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer' >
              Parish Cards
            </li>

          </ul>
        </div>
        <button className='bg-white text-[16px] font-semibold text-[#2d2d2d] py-[10px] px-[40px] border border-[#0451b0] rounded-[30px] transition-all hover:bg-[#033f91] hover:text-white '>
       Join Waitlist
        </button>
      </div>
    </div>
  )
}
