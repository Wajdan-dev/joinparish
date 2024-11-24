import Image from 'next/image'
import React from 'react'

export const JoinUs = () => {
  return (
    <div className='max-w-[1280px] py-[30px] bg-white mx-auto w-full'>
            <div className='bg-[#F1F3F8] w-full rounded-[24px] px-[30px] p-[30px]  '>
                <div className='max-w-[828px] w-full mx-auto flex flex-col items-center gap-4 '>

                <h1 className=' text-center  text-[30px] font-semibold'>
                Communities with Credit Parish 
General 

                </h1>
                <button className='bg-[#033f91] text-[#ffff] text-[18px] rounded-[36px] px-[50px] py-[20px] font-semibold  flex gap-2 justify-center '>
                Join The Waitlist
                        </button>
                        <Image src='/images/play-buttons-1536x368.png' className='max-w-[473px] mx-auto w-full h-auto' width={1000} height={1000} alt='' />
                </div>
           </div>
        </div>
  )
}
