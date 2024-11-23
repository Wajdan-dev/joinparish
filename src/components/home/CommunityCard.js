import Image from 'next/image';
import React from 'react'

const data = [
    {
        heading: "33%",
        subHeading: "FAMILIES",
        description: "1 in 3 families Go into debt to maintain communication with their loved ones."
    },
    {
        heading: "83%",
        subHeading: "WOMEN",
        description: "83% of those covering incarceration-related costs are women"
    },
    {
        heading: "$3B",
        subHeading: "SPENT",
        description: "Annually Families spend $3 billion on commissary accounts and phone calls."
    }
];


export const CommunityCard = () => {
    return (
        <div className='max-w-[1280px] bg-white mx-auto w-full'>
            <div className='bg-[#033F91] w-full rounded-[24px] px-[30px] pt-[30px] gap-[30px] grid grid-cols-1 lg:grid-cols-2 '>
               

                <div className="">
                    <Image src='/images/Lady-Holding-Card-copy234.webp' className='max-w-full h-auto w-full' width={1000} height={1000} alt='' />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className='text-white text-[30px] font-semibold lg:text-[48px] '>
                    Parish Community Card

                    </h3>
                    <p className='lg:text-[18px] text-white'>
                    A secured credit card designed to help the families and friends of incarcerated individuals build credit by leveraging recurring commissary and telecommunication payments. 


                    </p>
                    <div className="grid grid-cols-1 text-white lg:grid-cols-3 gap-[20px]">
                        {data.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h1 className="lg:text-[43px] text-[30px] font-bold">{item.heading}</h1>
                                <p className="text-[19px] mb-2 font-normal">{item.subHeading}</p>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
