import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
    return (
        <div className='bg-transparent' style={{ backgroundImage: 'linear-gradient(180deg, #0451B0 44%, #0451B0 100%)' }}>
            <div className="max-w-[1280px] mx-auto py-[30px]     px-[15px] lg:px-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px]  ">
                    <div className='flex flex-col gap-[30px]'>
                        <h1 className='lg:text-[73px] text-[45px] text-center lg:text-start font-semibold text-white'>
                            Unlocking Financial Freedom
                        </h1>
                        <div className="px-[16px] hidden lg:block border text-white border-white rounded-[24px] w-[99px] text-center">
                            <h6 className='font-semibold uppercase'>
                                Mission
                            </h6>
                        </div>
                        <p className='text-white hidden lg:block font-normal lg:text-[20px]' >
                            Parish   fosters economic mobility for justice-impacted communities by empowering returning citizens, the family members of incarcerated individuals, and   with innovative and inclusive financial technology.
                        </p>
                        <button className='bg-white hidden   text-[#2d2d2d] text-[18px] rounded-[36px] px-[50px] py-[20px] font-semibold w-[219px] lg:flex gap-2 justify-center '>
                            Learn More
                        </button>
                    </div>

                    <div>
                        <Image src='/images/card.png' width={1000} height={1000} className='w-full h-auto max-w-full' alt='' />
                        <div className="px-[16px] mb-7 mx-auto lg:hidden block border text-white border-white rounded-[24px] w-[99px] text-center">
                            <h6 className='font-semibold uppercase'>
                                Mission
                            </h6>
                        </div>
                        <p className='text-white mb-7 lg:hidden block font-normal lg:text-[20px]' >
                            Parish   fosters economic mobility for justice-impacted communities by empowering returning citizens, the family members of incarcerated individuals, and  with innovative and inclusive financial technology.
                        </p>
                        <button className='bg-white  mx-auto mb-3 lg:hidden   text-[#2d2d2d] text-[18px] rounded-[36px] px-[50px] py-[10px] font-semibold w-[219px] flex gap-2 justify-center '>
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
