'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Modal from '../ui/Modal';
import Link from 'next/link';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsDrawerOpen(false)
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsDrawerOpen(false); // Close drawer after clicking a menu item
    }
  };
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => (prevStep === 1 ? 2 : 1));
  };
  const handleBack = () => {
    setStep((prevStep) => (prevStep === 1 ? 2 : 1));
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-white lg:h-[80px] flex items-center relative">
      {/* <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="flex flex-col">
          <h1 className='font-semibold text-[20px] text-center'>
            Parish
          </h1>
          <h2 className='text-[35px] font-semibold text-center'>
            Get Demo Access

          </h2>
          <p className='text-center'>
            Fill out the form to access our exclusive demo.

          </p>
          <div
            className="bg-[#f9f9f9] max-w-[398px] mx-auto w-full p-[30px] rounded-[15px] my-4"
            style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
          >
 
            <div className="flex justify-between items-center">
              <div className={`pr-[33px] flex items-center flex-col justify-center`}>
                <div
                  className={`rounded-full flex justify-center items-center h-[22px] w-[22px] ${step === 1 ? "bg-[#0451b0] text-white" : "bg-white text-[#c2cbd2] border border-[#c2cbd2]"
                    }`}
                >
                  1
                </div>
              </div>

              <div className={`bg-${step === 1 ? "[#babfc5]" : "[#0451b0]"} w-full h-[1px]`}></div>

              <div className={`pl-[33px] flex items-center flex-col justify-center`}>
                <div
                  className={`rounded-full flex justify-center items-center h-[22px] w-[22px] ${step === 2 ? "bg-[#0451b0] text-white" : "bg-white text-[#c2cbd2] border border-[#c2cbd2]"
                    }`}
                >
                  2
                </div>
              </div>
            </div>

            
            {step === 1 ? (
              <>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="company" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="company"
                  />
                </div>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="firstName" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="firstName"
                  />
                </div>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="lastName" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="lastName"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="lastName" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Job Title*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="lastName"
                  />
                </div>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="lastName" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="lastName"
                  />
                </div>
                <div className="flex flex-col mb-[14px]">
                  <label htmlFor="lastName" className="pb-[7px] text-[#2d2d2d] text-[16px] font-semibold">
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="Phone*"
                    className="w-full border border-[#22283133] bg-white rounded-[59px] py-2 px-3 outline-none"
                    id="lastName"
                  />
                </div>
              </>
            )}
            <div className="flex items-center gap-3">
              {step === 2 &&
                <button
                  className="rounded-[36px] w-[155px] h-[58px] flex justify-center items-center bg-[#0451b0] text-white text-[18px] font-semibold"
                  onClick={handleBack}
                >
                  Back
                </button>
              }
              <button
                className="rounded-[36px] w-[155px] h-[58px] flex justify-center items-center bg-[#0451b0] text-white text-[18px] font-semibold"
                onClick={handleNext}
              >
                {step === 1 ? "Next" : "Submit"}
              </button>
            </div>

          </div>
          <p className="text-center text-[12px] max-w-[398px] mx-auto">
            You can unsubscribe at any time by clicking the link in the footer of our emails. To read our Privacy Policy, please visit:

          </p>
          <p className="text-center text-[12px] max-w-[398px] mx-auto">
            https://www.parishtec.app/privacy-policy.
          </p>
        </div>

      </Modal> */}
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
      {/* Header */}
      <div className="max-w-[1280px] mx-auto w-full px-[15px] lg:px-0 flex justify-between items-center">
        <div className="logo" data-aos-duration="1000" data-aos="fade-down">

        <h1
  className="font-bold text-black text-[35px] lg:text-[40px] cursor-pointer inline-block select-none"
  onClick={() => window.location.reload()}
>
  Parish
</h1>

          


        </div>
        <div className="menu-items hidden lg:block" data-aos-duration="1000" data-aos="fade-down">
          <ul className="flex gap-[30px] items-center">
            <li
              className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li
              className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer"
              onClick={() => scrollToSection('mission')}
            >
              Mission
            </li>
            <li
              className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer"
              onClick={() => scrollToSection('justice-sections')}
            >
              Parish Cards
            </li>
            <li
              className="text-[#2d2d2d] text-[16px] transition-all hover:text-[#0451b0] font-semibold cursor-pointer"
              onClick={() => scrollToSection('faqs')}
            >
              FAQ
            </li>
          </ul>
        </div>
        <button
          onClick={toggleModal}

          data-aos-duration="1200"
          data-aos="fade-down"
          className="bg-white hidden lg:block text-[16px] font-semibold text-[#2d2d2d] py-[10px] px-[40px] border border-[#0451b0] rounded-[30px] transition-all hover:bg-[#033f91] hover:text-white"
        >
          Join Waitlist
        </button>
        <Image
          src="/images/menu.png"
          width={20}
          height={20}
          alt="hamburger"
          className="cursor-pointer lg:hidden"
          onClick={toggleDrawer}
        />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#232323] text-white z-50 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-[20px] flex justify-between items-center">
          <h2 className="text-[24px] font-bold">Parish</h2>
        </div>
        <ul className="mt-[20px] space-y-[15px] p-[20px]">
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('mission')}
          >
            Mission
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('justice-sections')}
          >
            Parish Cards
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection('faqs')}
          >
            FAQ
          </li>
          <li>
            <button
              onClick={toggleModal}

              data-aos-duration="1200"
              data-aos="fade-down"
              className="bg-white  text-[16px] font-semibold text-[#2d2d2d] py-[10px] px-[40px] border border-[#0451b0] rounded-[30px] transition-all hover:bg-[#033f91] hover:text-white"
            >
              Join Waitlist
            </button>
          </li>
        </ul>

      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};
