'use client'
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

export const ProductSolution = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-white py-[40px] px-[15px] lg:px-0'>
            <div className="max-w-[1280px] mx-auto w-full text-center">
                <h1 className='text-[#2d2d2d] text-[30px] lg:text-[64px] font-semibold ' data-aos-duration="1000" data-aos="fade-up">
                    Product Features
                </h1>
                <p className='text-[#2d2d2d] lg:text-[20px]' data-aos-duration="1000" data-aos="fade-up"  >Credit-building financial technology that leverages recurring charges for &nbsp;justice-impacted communities&nbsp;</p>
                <div className="flex justify-center pt-3" data-aos-duration="1500" data-aos="fade-up">

                    <ul>
                        <li className='flex gap-3 text-start lg:items-center'>
                            <span className="flex-shrink-0">
                                <Image
                                    src='/images/svgexport-1.svg'
                                    width={15}
                                    height={15}
                                    alt=''
                                    className="object-contain mt-2"  // Ensures the image fits within the container
                                />
                            </span>
                            <span className='text-[#2d2d2d] text-[16px] lg:text-[18px]'>
                                Reloadable secured credit card for recurring criminal legal system related payments
                            </span>
                        </li>
                        <li className='flex gap-3 text-start lg:items-center'>
                            <span className="flex-shrink-0">
                                <Image
                                    src='/images/svgexport-1.svg'
                                    width={15}
                                    height={15}
                                    alt=''
                                    className="object-contain mt-2"  // Ensures the image fits within the container
                                />
                            </span>
                            <span className='text-[#2d2d2d] text-[16px] lg:text-[18px]'>
                                Digital convenience and security with custom electronic wallets
                            </span>
                        </li>
                        <li className='flex gap-3 text-start lg:items-center'>
                            <span className="flex-shrink-0">
                                <Image
                                    src='/images/svgexport-1.svg'
                                    width={15}
                                    height={15}
                                    alt=''
                                    className="object-contain mt-2"  // Ensures the image fits within the container
                                />
                            </span>
                            <span className='text-[#2d2d2d] text-[16px] lg:text-[18px]'>
                                Comprehensive credit reporting and spending insights
                            </span>
                        </li>
                        <li className='flex gap-3 text-start lg:items-center'>
                            <span className="flex-shrink-0">
                                <Image
                                    src='/images/svgexport-1.svg'
                                    width={15}
                                    height={15}
                                    alt=''
                                    className="object-contain mt-2"  // Ensures the image fits within the container
                                />
                            </span>
                            <span className='text-[#2d2d2d] text-[16px] lg:text-[18px]'>
                                Positive only payment reporting to all major credit bureaus
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
