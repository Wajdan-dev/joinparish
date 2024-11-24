'use client'
import React, { useState, useRef } from 'react';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Verpachtung');
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Verpachtung",
      faqItems: [
        {
          id: 1,
          title: 'What is Parish?',
          content: 'Parish is an upcoming financial technology startup platform focused on empowering justice-impacted individuals and their families by offering credit-building tools and financial support. Our goal is to help people rebuild credit and achieve financial independence.'
        },
        {
          id: 2,
          title: 'How can I get early access to Parish?',
          content: `Simply sign up on our landing page! By joining our early access list, you'll be among the first to try Parish when we launch and receive exclusive updates about our progress.`
        },
        {
          id: 3,
          title: 'Who is Parish designed for?',
          content: 'Parish is designed to support justice-impacted individuals, their families, and reentry housing providers. Our mission is to provide accessible financial tools and resources tailored to those who face unique financial challenges.'
        },
        {
          id: 4,
          title: 'When will Parish be available?',
          content: `We’re working hard to bring Parish to life! While we don't have an exact launch date yet, signing up for early access ensures you're the first to know about our progress and release updates.`
        },

      ]
    },
    {
      category: "Projekte",
      faqItems: [
      ]
    },
    {
      category: "Technologie",
      faqItems: [
      ]
    },
    {
      category: "Umgebung",
      faqItems: [
      ]
    }
  ];

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    setActiveIndex(null);
  };

  const activeFaqItems = faqData.find(item => item.category === activeFilter)?.faqItems || [];

  return (
    <div className=" ">

      <div className=" ">
        <div className="md:pl-3 flex flex-col gap-3">
          {activeFaqItems.length > 0 ? (
            activeFaqItems.map((item, index) => (
              <div key={item.id}>
                <div
                  className="md:p-[20px] text-white p-[10px]   cursor-pointer border-b border-[#ffff]  "

                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center  justify-between">


                    <h3 className="font-semibold text-[18px] leading-[28px]" style={{ letterSpacing: '0.15px' }}>{item.title}</h3>
                    <div className='bg-[#0451b0] rounded-full p-[7px]'>

                      <img
                        src={activeIndex === index ? '/images/minus-sign.png' : '/images/plus.svg'}
                        className="w-[12px] h-[12px] filter invert"
                        alt="toggle icon"
                      />

                    </div>
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[300px]' : 'max-h-0'
                      }`}
                    style={{
                      height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                    }}
                  >
                    <div className="p-[10px] mt-2">
                      <p className="text-[16px] leading-[24px]">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No FAQs available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};