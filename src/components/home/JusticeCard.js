'use client';
import Aos from 'aos';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

const data = [
    {
        heading: 10_000_000, // 10M
        subHeading: "INDIVIDUALS",
        description: "Owe a collective $50 billion in fees, fines, and charges to the criminal justice system.",
        suffix: "M"
    },
    {
        heading: 47, // 47
        subHeading: "STATES",
        description: "Have laws allowing supervision fees, with 38 states requiring monthly fees from $10 to $208.",
        suffix: "" // No suffix
    },
    {
        heading: 1_200_000_000, // 1.2B
        subHeading: "SPENT",
        description: "On electronic monitoring in 2023 alone.",
        suffix: "B",
        prefix: "$" // Add a prefix for currency
    }
];

export const JusticeCard = () => {
    const [counters, setCounters] = useState(data.map(() => 0)); // Initialize counters to 0

    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('justice-section');
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

    const formatNumber = (value, suffix, prefix = "") => {
        let formattedValue;

        if (suffix === "M") {
            const millionValue = value / 1_000_000;
            formattedValue = Number.isInteger(millionValue)
                ? `${millionValue}M`
                : `${millionValue.toFixed(1)}M`;
        } else if (suffix === "B") {
            const billionValue = value / 1_000_000_000;
            formattedValue = Number.isInteger(billionValue)
                ? `${billionValue}B`
                : `${billionValue.toFixed(1)}B`;
        } else {
            formattedValue = Math.round(value); // For values without suffix
        }

        return `${prefix}${formattedValue}`; // Add the prefix if it exists
    };

    return (
        <div
            id="justice-section"
            className="max-w-[1280px] py-[30px] bg-white mx-auto w-full"
            data-aos-duration="1000"
            data-aos="fade-up"
        >
            <div className="bg-[#F1F3F8] w-full rounded-[24px] px-[30px] pt-[30px] gap-[30px] grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[#2d2d2d] text-[30px] font-semibold lg:text-[48px]">
                        Parish Justice Card
                    </h3>
                    <p className="lg:text-[18px]">
                        A secured credit card that helps justice-impacted individuals build credit by leveraging recurring payments for community supervision, electronic monitoring, and restitution fees.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                        {data.map((item, index) => (
                            <div className="text-center" key={index}>
                                <h1 className="lg:text-[43px] text-[30px] font-bold">
                                    {formatNumber(counters[index], item.suffix, item.prefix)}
                                </h1>
                                <p className="text-[19px] mb-2 font-normal">{item.subHeading}</p>
                                <p data-aos-duration="1500" data-aos="fade-up">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <Image
                        src="/images/Black-Parish-Tec-Card-Final-Double-card.webp"
                        className="max-w-full h-auto w-full"
                        width={1000}
                        height={1000}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
