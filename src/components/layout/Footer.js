import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div className='px-[15px] lg:px-0 max-w-[1280px] mx-auto w-full pt-4 pb-[50px]'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
                <div className="flex flex-col gap-[20px]">
                    <h1 className='font-bold  text-black text-[40px]'>
                        Parish
                    </h1>
                    <p className='text-[17px] font-normal'>
                        © Parish Reentry Technologies, Inc. All Rights Reserved. 2024
                    </p>
                </div>
                <div className="flex flex-col items-end gap-[40px]">
                   <div className="flex gap-[30px]">
                    <Image src='/images/facebook.svg' width={20} height={20} alt='fb' />
                    <Image src='/images/twitter.svg' width={20} height={20} alt='fb' />
                    <Image src='/images/youtube.svg' width={20} height={20} alt='fb' />
                    <Image src='/images/linkedin.svg' width={20} height={20} alt='fb' />
                    <Image src='/images/insta.svg' width={20} height={20} alt='fb' />
                   </div>
                   <ul className="flex p-0 list-none">
                    <li className="relative mx-3 cursor-pointer">
                    Privacy Policy
                    </li>
                    <li className="relative mx-3 cursor-pointer">
                    built by websitesfast.co.uk
                    </li>
                   </ul>
                </div>
            </div>
        </div>
    )
}
