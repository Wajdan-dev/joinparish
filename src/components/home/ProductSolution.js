import Image from 'next/image'
import React from 'react'

export const ProductSolution = () => {
    return (
        <div className='bg-white py-[40px] px-[15px] lg:px-0'>
            <div className="max-w-[1280px] mx-auto w-full text-center">
                <h1 className='text-[#2d2d2d] text-[30px] lg:text-[64px] font-semibold '>
                    Product Features
                </h1>
                <p className='text-[#2d2d2d] lg:text-[20px]'>Credit-building financial technology that leverages recurring charges for &nbsp;justice-impacted communities&nbsp;</p>
                <div className="flex justify-center pt-3">

                    <ul>
                        <li className='flex gap-3 text-start items-center'>
                            <span>
                                <Image src='/images/svgexport-1.svg' width={15} height={15} alt='' />
                            </span>
                            <span className='text-[#2d2d2d] text-[18px]'>
                                Reloadable secured credit card for recurring criminal legal system related payments

                            </span>

                        </li>
                        <li className='flex gap-3 text-start items-center'>
                            <span>
                                <Image src='/images/svgexport-1.svg' width={15} height={15} alt='' />
                            </span>
                            <span className='text-[#2d2d2d] text-[18px]'>
                                Digital convenience and security with custom electronic wallets

                            </span>

                        </li>
                        <li className='flex gap-3 text-start items-center'>
                            <span>
                                <Image src='/images/svgexport-1.svg' width={15} height={15} alt='' />
                            </span>
                            <span className='text-[#2d2d2d] text-[18px]'>
                                Comprehensive credit reporting and spending insights
                               

                            </span>

                        </li>
                        <li className='flex gap-3 text-start items-center'>
                            <span>
                                <Image src='/images/svgexport-1.svg' width={15} height={15} alt='' />
                            </span>
                            <span className='text-[#2d2d2d] text-[18px]'>
                            Positive only payment reporting to all major credit bureaus
                            </span>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
