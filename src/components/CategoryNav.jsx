import React from "react";

export default function CategoryNav({ isMobile = false }) {
  const categories = [
    "Marketing",
    "Architecture",
    "Web Design",
    "AI Services",
    "Business Style",
    "Development & IT",
    "Photography",
    "Design & Creative",
    "Programming",
    "Animation"
  ];

  return (
    <div
      className={`${
        isMobile
          ? "flex flex-col space-y-2 px-6 py-4"
          : "hidden xl:flex justify-center align-center space-x-6 py-4 bg-white text-black border-b"
      }`}
    >
      {categories.map((category) => (
        <a href="#" key={category} className={isMobile ? "" : "hover:underline"}>
          {category}
        </a>
      ))}
    </div>
  );
}
