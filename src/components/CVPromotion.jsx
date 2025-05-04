import PromoImg from "../assets/banner.webp"

import React from "react";

export default function CVPromotion() {
  return (
    <div className="bg-white py-10">
      <div className="bg-[#0e5545] text-white rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold">Explore New Life</p>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Don’t just find. Be found — put your CV in front of great employers
          </h2>
          <p className="text-gray-200 max-w-xl">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full">
            Get Services →
          </button>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white text-black rounded-lg py-4 px-6 text-center w-[150px]">
              <p className="text-2xl font-bold">56M+</p>
              <p className="text-sm">Total Freelancers</p>
            </div>
            <div className="bg-white text-black rounded-lg py-4 px-6 text-center w-[150px]">
              <p className="text-2xl font-bold">59M+</p>
              <p className="text-sm">Total Services</p>
            </div>
            <div className="bg-white text-black rounded-lg py-4 px-6 text-center w-[150px]">
              <p className="text-2xl font-bold">65M+</p>
              <p className="text-sm">Total Job</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 mt-10 lg:mt-0 lg:ml-12">
          <img
            src={PromoImg} // Replace with actual path
            alt="Team working together"
            className="rounded-xl w-full h-auto max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
