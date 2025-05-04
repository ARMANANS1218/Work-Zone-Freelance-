import React from "react";
import { FaSearch } from "react-icons/fa";
import HeroImg from "../assets/gen-z-suffering-hangover3.png";
import HeroBg from "../assets/Herobg2.jpg";

const content = {
  en: {
    heading: "Find Your Perfect Freelancer Quick and Easy",
    searchPlaceholder: "Search for any service...",
    happyCustomers: "35M+ Happy Customers"
  },
  hi: {
    heading: "अपना आदर्श फ्रीलांसर जल्दी और आसानी से खोजें",
    searchPlaceholder: "किसी भी सेवा के लिए खोजें...",
    happyCustomers: "35M+ संतुष्ट ग्राहक"
  }
};

export default function HeroSection({ language, currency }) {
  const lang = content[language] || content.en;

  return (
    <section
      className="flex flex-col xl:flex-row items-center justify-center px-4 xl:px-24 py-16 text-white bg-cover bg-center min-h-screen "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Hero content */}
      <div className="text-center xl:text-left xl:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
          {lang.heading.split(" ").map((word, i) => (
            <span
              key={i}
              className={
                word.toLowerCase() === "freelancer" || word.includes("फ्रीलांसर")
                  ? "text-green-400"
                  : ""
              }
            >
              {" "}
              {word}
            </span>
          ))}
        </h1>

        <div className="flex items-center bg-white text-black rounded-full px-4 py-3 max-w-xl mx-auto xl:mx-0">
          <select className="bg-transparent outline-none">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            placeholder={lang.searchPlaceholder}
            className="flex-1 px-3 outline-none"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        <div className="flex justify-center xl:justify-start items-center space-x-4 text-sm pt-2">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-7 h-7 rounded-full"
                alt="user"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-7 h-7 rounded-full"
                alt="user"
              />
            </div>
            <span>{lang.happyCustomers}</span>
          </div>
          <span>4.9 ⭐⭐⭐⭐⭐</span>
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 xl:mt-0 xl:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="freelancer"
          className="w-full h-auto xl:h-full object-contain"
        />
      </div>
    </section>
  );
}
