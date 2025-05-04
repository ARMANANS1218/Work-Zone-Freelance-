import React from 'react';
import vecImg from "../assets/vec.png";

export default function TalentBanner() {
  return (
    <div className='bg-white w-full h-full px-4 md:px-20 py-10 overflow-visible'>
      <div className="bg-[#075c50] rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 text-white relative overflow-visible">
        
        <div className="max-w-xl z-10 ms-20">
          <h2 className="text-[60px] md:text-[60px] font-bold leading-snug mb-4">
            Find the talent needed to get your business growing.
          </h2>
          <p className="mb-6 text-sm md:text-base text-[#d9f0ec]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition">
            Get Started →
          </button>
        </div>

        <div className="relative mt-20 md:mt-0  z-10 overflow-visible flex-shrink-0 w-full md:w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg me-40 ">
          <img 
            src={vecImg}
            alt="Business professionals"
            className="w-[700px] h-auto object-contain "
          />
        </div>

         
      </div>
    </div>
  );
}
