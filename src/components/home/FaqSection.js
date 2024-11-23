import React from 'react'; 
import { Faq } from './Faq';

export const FaqSection = () => {
  return (
    <div className="max-w-[1280px] py-[30px] bg-white mx-auto w-full">

    <div className="  p-[30px] bg-[#033F91] rounded-[24px]   mx-auto  ">
      <div className="text-center">
        <h1 className="text-[40px] lg:text-[64px] font-semibold text-white ">FAQ</h1>
        <p className='text-center text-white lg:text-[18px] max-w-[688px] mx-auto mb-3'>
        If you didn’t find the answer you’re looking for, feel free to reach out to us at info@parishtec.com. Our team is happy to assist you!
        </p>
      </div>
      <div className="pt-5 max-w-[1068px] mx-auto mb-[66px]">
        <Faq />
      </div>
    </div>
    </div>
  );
};
