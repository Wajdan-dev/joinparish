'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Modal from '../ui/Modal';

export const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      className='  relative'
      style={{ background: 'linear-gradient(180deg, #0451B0 44%, #0451B0 100%)' }}
    >
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="flex flex-col">
          <h1 className='font-semibold text-[20px] text-center'>
            Parish
          </h1>
          <h2 className='text-[35px] font-semibold text-center'>
            Get Exclusive Early Access
          </h2>
          <p className='text-center'>
            Join the Parish  family and be the first to know when we launch!
          </p>
          <div className="lg:p-[30px]">
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
              Submit
            </button>
          </div>
        </div>

      </Modal>

      {/* Background Overlay */}
      <div
        className="absolute  inset-0 opacity-[.16] bg-gradient-to-b"
        style={{ background: 'linear-gradient(180deg, #FFFFFFD1 0%, #2D2D2D47 94%)', zIndex: 1 }}
      ></div>

      {/* Hero Content */}
      <div className="max-w-[1280px] mx-auto py-[100px] px-[15px] lg:px-0 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px]">
          <div className='flex flex-col gap-[30px] lg:py-[60px]'>
            <h1 data-aos-duration="1000" data-aos="fade-up" className='lg:text-[70px] lg:leading-[80.6px] text-[45px] text-center lg:text-start font-semibold text-white'>
              Unlocking Financial Freedom
            </h1>
            <div id='mission' className="px-[16px] hidden lg:block border text-white border-white rounded-[24px] w-[99px] text-center">
              <h6 className='font-semibold uppercase'>
                Mission
              </h6>
            </div>
            <p className='text-white hidden lg:block font-normal lg:text-[20px]' data-aos-duration="1000" data-aos="fade-up">
              Parish fosters economic mobility for justice-impacted communities by empowering returning citizens, the family members of incarcerated individuals, and with innovative and inclusive financial technology.
            </p>
            <button onClick={toggleModal} data-aos-duration="1000" data-aos="fade-up" className='bg-white hidden text-[#2d2d2d] text-[18px] rounded-[36px] px-[50px] py-[20px] font-semibold w-[219px] lg:flex gap-2 justify-center'>
              Learn More
            </button>
          </div>

          <div>
            <Image src='/images/parish-banner.png' width={1000} height={1000} className='w-full h-auto max-w-[520px] object-contain lg:ml-auto' alt='' />
            <div className="px-[16px] mb-7 mx-auto lg:hidden block border text-white border-white rounded-[24px] w-[99px] text-center">
              <h6 className='font-semibold uppercase'>
                Mission
              </h6>
            </div>
            <p className='text-white mb-7 lg:hidden block font-normal lg:text-[20px]'>
              Parish fosters economic mobility for justice-impacted communities by empowering returning citizens, the family members of incarcerated individuals, and with innovative and inclusive financial technology.
            </p>
            <button onClick={toggleModal} className='bg-white mx-auto mb-3 lg:hidden text-[#2d2d2d] text-[18px] rounded-[36px] px-[50px] py-[10px] font-semibold w-[219px] flex gap-2 justify-center'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
