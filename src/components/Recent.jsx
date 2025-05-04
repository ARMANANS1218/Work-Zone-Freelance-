import React, { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import FetImg1 from "../assets/features (1).avif";
import FetImg2 from "../assets/features (1).jpg";
import FetImg3 from "../assets/features (2).jpg";
import FetImg4 from "../assets/features (3).jpg";
import FetImg5 from "../assets/features (4).jpg";
import FetImg6 from "../assets/features (5).jpg";

const featuredServices = [

  
  {
    id: 4,
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-09-04-3084.webp",
    price: 25,
    title: "Logo Designer for Startups",
    rating: 4.5,
    reviews: 7,
    user: {
      name: "Alice Mathews",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      verified: true,
    },
  },
  {
    id: 5,
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-10-30-5232.webp",
    price: 60,
    title: "Professional Resume Writer",
    rating: 4.9,
    reviews: 22,
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      verified: true,
    },
  },
  {
    id: 6,
    image: "https://workzone.mamunuiux.com/uploads/custom-images/listing-2024-07-10-01-12-40-6616.webp",
    price: 75,
    title: "Mobile App UI/UX Designer",
    rating: 4.7,
    reviews: 14,
    user: {
      name: "Maria Hill",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      verified: true,
    },
  },
];

export default function FeaturedServices() {
  const sliderRef = useRef();

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -960 : 960; // 3 cards * 320px each
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative px-6 xl:px-24 py-16 bg-neutral-200">
      <h2 className="text-3xl font-bold">Recently Added</h2>
      <p className="text-gray-500 mb-6">Get best services for your work</p>

      <div className="overflow-hidden max-w-[960px]" ref={sliderRef}>
    <div className="flex transition-all duration-300 space-x-6 w-max">
      {featuredServices.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-2xl shadow p-4 min-w-[300px] max-w-[300px] flex-shrink-0"
        >
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl mb-4 w-full h-[180px] object-cover"
          />
          <div className="text-green-600 font-bold text-lg">
            ${service.price.toFixed(2)}
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <FaStar className="text-black mr-1" />
            {service.rating.toFixed(1)} ({service.reviews})
          </div>
          <div className="font-semibold text-black">{service.title}</div>
          <div className="flex items-center mt-3 space-x-2">
            <img
              src={service.user.avatar}
              className="w-7 h-7 rounded-full"
              alt={service.user.name}
            />
            <span>{service.user.name}</span>
            {service.user.verified && (
              <FaCheckCircle className="text-green-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

      {/* Navigation Buttons */}
      <div className="absolute top-16 right-10 flex space-x-3">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-green-500 text-green-500 flex items-center justify-center hover:bg-green-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-green-500 text-green-500 flex items-center justify-center hover:bg-green-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
