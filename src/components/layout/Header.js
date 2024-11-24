'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-white h-[80px] flex items-center relative">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto w-full px-[15px] lg:px-0 flex justify-between items-center">
        <div className="logo">
          <h1 className="font-bold text-black text-[40px]">Parish</h1>
        </div>
        <div className="menu-items hidden lg:block">
          <ul className="flex gap-[30px] items-center">
            <li className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer">Home</li>
            <li className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer">Mission</li>
            <li className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer">Parish Cards</li>
          </ul>
        </div>
        <button className="bg-white hidden lg:block text-[16px] font-semibold text-[#2d2d2d] py-[10px] px-[40px] border border-[#0451b0] rounded-[30px] transition-all hover:bg-[#033f91] hover:text-white">
          Join Waitlist
        </button>
        <Image
          src="/images/menu.png"
          width={20}
          height={20}
          alt="hamburger"
          className="cursor-pointer lg:hidden"
          onClick={toggleDrawer}
        />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#232323] text-white z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-[20px] flex justify-between items-center  ">
          <h2 className="text-[24px] font-bold">Parish</h2>
          
        </div>
        <ul className="mt-[20px] space-y-[15px] p-[20px]">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">Mission</li>
          <li className="cursor-pointer hover:text-gray-400">Parish Cards</li> 
        </ul>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};
