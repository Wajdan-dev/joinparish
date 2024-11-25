'use client'
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Modal from '../ui/Modal';

export const JoinUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='max-w-[1280px] py-[30px] bg-white mx-auto w-full'>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="flex flex-col">
          <h1 className='font-semibold text-[20px] text-center'>
            Parish
          </h1>
          <h2 className='text-[35px] font-semibold text-center'>
            Get Exclusive Early Access
          </h2>
          <p className='text-center'>
            Join the Parish tec family and be the first to know when we launch!
          </p>
          <div className="p-[30px]">
            <div className="flex flex-col mb-[14px]">
              <label htmlFor="" className='pb-[7px] text-[#2d2d2d] text-[16px] font-semibold '>

                Please select the option that best describes your role or relationship to the justice-impacted community:
              </label>
              <select id="countries" className=" w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none">

                <option value="Financial Supporter – I send money for someone in prison.">Financial Supporter – I send money for someone in prison.</option>
                <option value="Returning Citizen – I am a returning citizen who is mandated to pay restitution, electronic monitoring and/or community supervision fees.">Returning Citizen – I am a returning citizen who is mandated to pay restitution, electronic monitoring and/or community supervision fees.</option>
                <option value="Residential Representative – I represent or am involved with housing facilities or services that may assist justice-impacted individuals.">Residential Representative – I represent or am involved with housing facilities or services that may assist justice-impacted individuals.</option>
                <option value="Select One*">Select One*</option>

              </select>
            </div>
            <div className="flex flex-col mb-[14px]">
              <label htmlFor="" className='pb-[7px] text-[#2d2d2d] text-[16px] font-semibold '>
              First Name
              </label>
              <input type="text" placeholder='First Name*' className=" w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none" name="" id="" />
              
            </div>
            <div className="flex flex-col mb-[14px]">
              <label htmlFor="" className='pb-[7px] text-[#2d2d2d] text-[16px] font-semibold '>
              Last Name
              </label>
              <input type="text" placeholder='Last Name*' className=" w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none" name="" id="" />
              
            </div>
            <div className="flex flex-col mb-[14px]">
              <label htmlFor="" className='pb-[7px] text-[#2d2d2d] text-[16px] font-semibold '>
             Email
              </label>
              <input type="email" placeholder='Email*' className=" w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none" name="" id="" />
              
            </div>
            <button className='rounded-[36px] w-[155px] h-[58px] flex justify-center items-center bg-[#0451b0] text-white  text-[18px] font-semibold '>
            submit 
            </button>
          </div>
        </div>

      </Modal>
      <div className='bg-[#F1F3F8] w-full rounded-[24px] px-[30px] p-[30px]  '>
        <div className='max-w-[828px] w-full mx-auto flex flex-col items-center gap-4 '>

          <h1 className=' text-center  text-[30px] font-semibold' data-aos-duration="1000" data-aos="fade-up">
            Communities with Credit Parish
            General

          </h1>
          <button
            className="bg-[#033f91] text-[#ffff] text-[18px] rounded-[36px] px-[50px] py-[20px] font-semibold flex gap-2 justify-center"
            onClick={toggleModal}
          >
            Join The Waitlist
          </button>
          <div data-aos-duration="1000" data-aos="fade-up">

            <Image src='/images/play-buttons-1536x368.png' className='max-w-[473px] mx-auto w-full h-auto' width={1000} height={1000} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
