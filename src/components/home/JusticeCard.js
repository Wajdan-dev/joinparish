import Image from 'next/image';
import React from 'react'

const data = [
    {
        heading: "10M",
        subHeading: "INDIVIDUALS",
        description: "Owe a collective $50 billion in fees, fines, and charges to the criminal justice system."
    },
    {
        heading: "47",
        subHeading: "STATES",
        description: "Have laws allowing supervision fees, with 38 states requiring monthly fees from $10 to $208."
    },
    {
        heading: "$1.2B",
        subHeading: "SPENT",
        description: "On electronic monitoring in 2023 alone."
    }
];


export const JusticeCard = () => {
    return (
        <div className='max-w-[1280px] py-[30px] bg-white mx-auto w-full'>
            <div className='bg-[#F1F3F8] w-full rounded-[24px] px-[30px] pt-[30px] gap-[30px] grid grid-cols-1 lg:grid-cols-2 items-center '>
                <div className="flex flex-col gap-[20px]">
                    <h3 className='text-[#2d2d2d] text-[30px] font-semibold lg:text-[48px] '>
                        Parish Justice Card
                    </h3>
                    <p className='lg:text-[18px]'>
                        A secured credit card that helps justice-impacted individuals build credit by leveraging recurring payments for community supervision, electronic monitoring, and restitution fees.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                        {data.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h1 className="lg:text-[43px] text-[30px] font-bold">{item.heading}</h1>
                                <p className="text-[19px] mb-2 font-normal">{item.subHeading}</p>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <Image src='/images/Black-Parish-Tec-Card-Final-Double-card.webp' className='max-w-full h-auto w-full' width={1000} height={1000} alt='' />
                </div>

            </div>
        </div>
    )
}
