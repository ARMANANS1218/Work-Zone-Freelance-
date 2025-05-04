// pages/Services.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const services = [
  {
    id: 1,
    price: "$49.00",
    rating: 0,
    title: "Digital Marketer for Social Media",
    author: "Naymr Jhon",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-09-04-3084.webp",
  },
  {
    id: 2,
    price: "$30.00",
    rating: 4,
    title: "Video Editor for Creative Projects",
    author: "David Richard",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-10-30-5232.webp",
  },
  {
    id: 3,
    price: "$15.00",
    rating: 0,
    title: "Social Media Manager for Engagement",
    author: "David Simmonsss",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-12-40-6616.webp",
  },
];

export default function Services() {
  return (
    <div className="bg-[#f7f5f0] min-h-screen pb-20">
      <div className="w-full h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.vortecautomation.com/vortec/Services.jpg"
          alt=""
        />
      </div>

      {/* Header */}
      <div className="relative h-[250px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/header-bg.jpg')" }}>
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mt-2 text-xl">
            <span className="text-green-500">The best services we provides</span>
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto p-6 flex flex-wrap items-center gap-4">
        <input type="text" placeholder="Search.." className="p-2  text-black rounded w-full sm:w-60 border" />
        <select className="p-2 rounded border text-black w-full sm:w-48">
          <option>All Categories</option>
        </select>
        <select className="p-2 text-black rounded border w-full sm:w-48">
          <option>Sub Categories</option>
        </select>
        <select className="p-2 text-black rounded border w-full sm:w-48">
          <option>Default</option>
        </select>
        <div className="flex text-black items-center gap-2 ml-auto">
          <label>Sort By:</label>
          <select className="p-2 rounded border">
            <option>Most Relevant</option>
          </select>
          <button className="bg-green-500 p-2 rounded text-white">▦</button>
          <button className="bg-gray-700 p-2 rounded text-white">☰</button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-xl shadow p-4">
            <img src={s.image} alt={s.title} className="rounded-xl mb-4" />
            <div className="text-green-600 font-bold text-lg">{s.price}</div>
            <div className="flex items-center gap-1 text-sm">
              <FaStar className="text-yellow-400" />
              <span>{s.rating.toFixed(1)} (0)</span>
            </div>
            <h3 className="mt-2 font-semibold text-lg text-black">{s.title}</h3>
            <div className="mt-2 text-sm text-gray-700">{s.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
