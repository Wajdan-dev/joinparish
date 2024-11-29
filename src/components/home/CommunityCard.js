'use client';
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const data = [
    {
        heading: 33, // 33%
        subHeading: "FAMILIES",
        description: "1 in 3 families Go into debt to maintain communication with their loved ones.",
        suffix: "%" // Percentage suffix
    },
    {
        heading: 83, // 83%
        subHeading: "WOMEN",
        description: "83% of those covering incarceration-related costs are women",
        suffix: "%" // Percentage suffix
    },
    {
        heading: 3_000_000_000, // $3B
        subHeading: "SPENT",
        description: "Annually families spend $3 billion on commissary accounts and phone calls.",
        suffix: "B" // Billion suffix
    }
];

export const CommunityCard = () => {
    const [counters, setCounters] = useState(data.map(() => 0)); // Initialize counters to 0

    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('community-section');
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                startCounting();
                window.removeEventListener('scroll', handleScroll); // Run only once
            }
        };

        const startCounting = () => {
            data.forEach((item, index) => {
                const steps = 100; // Number of steps for the animation
                const increment = item.heading / steps; // Calculate increment
                let count = 0;

                const interval = setInterval(() => {
                    count += increment;

                    setCounters((prev) => {
                        const updated = [...prev];
                        updated[index] = Math.min(count, item.heading); // Ensure it doesn't exceed the final value
                        return updated;
                    });

                    if (count >= item.heading) clearInterval(interval); // Stop at the target number
                }, 20); // Update every 20ms
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formatNumber = (value, suffix) => {
        if (suffix === "%") {
            return `${Math.round(value)}%`; // Percentage with no decimals
        } else if (suffix === "B") {
            const billionValue = value / 1_000_000_000;
            return Number.isInteger(billionValue)
                ? `$${billionValue}B`
                : `$${billionValue.toFixed(1)}B`;
        }
        return Math.round(value); // For values without suffix
    };

    return (
        <div
            id="community-section"
            className="max-w-[1280px] bg-white mx-auto w-full"
            data-aos-duration="1000"
            data-aos="fade-up"
        >
            <div className="bg-[#033F91] w-full rounded-[24px] px-[30px] pb-[30px] lg:pb-0 pt-[30px] gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <Image
                        src="/images/Lady-Holding-Card-copy234.webp"
                        className="max-w-full h-auto w-full"
                        width={1000}
                        height={1000}
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-white text-[30px] font-semibold lg:text-[48px]">
                        Parish Community Card
                    </h3>
                    <p className="lg:text-[18px] text-white">
                        A secured credit card designed to help the families and friends of incarcerated individuals build credit by leveraging recurring commissary and telecommunication payments.
                    </p>
                    <div className="grid grid-cols-1 text-white lg:grid-cols-3 gap-[20px]">
                        {data.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h1 className="lg:text-[43px] text-[30px] font-bold">
                                    {formatNumber(counters[index], item.suffix)}
                                </h1>
                                <p className="text-[19px] mb-2 font-normal">{item.subHeading}</p>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
