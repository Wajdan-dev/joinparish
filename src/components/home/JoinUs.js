'use client'
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'

export const JoinUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='max-w-[1280px] py-[30px] bg-white mx-auto w-full'>
            <div className='bg-[#F1F3F8] w-full rounded-[24px] px-[30px] p-[30px]  '>
                <div className='max-w-[828px] w-full mx-auto flex flex-col items-center gap-4 '>

                <h1 className=' text-center  text-[30px] font-semibold' data-aos-duration="1000" data-aos="fade-up">
                Communities with Credit Parish 
General 

                </h1>
                <button className='bg-[#033f91] text-[#ffff] text-[18px] rounded-[36px] px-[50px] py-[20px] font-semibold  flex gap-2 justify-center '>
                Join The Waitlist
                        </button>
                        <div  data-aos-duration="1000" data-aos="fade-up">

                        <Image  src='/images/play-buttons-1536x368.png' className='max-w-[473px] mx-auto w-full h-auto' width={1000} height={1000} alt=''  />
                        </div>
                </div>
           </div>
        </div>
  )
}
