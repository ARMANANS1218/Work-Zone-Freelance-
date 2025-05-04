import React from "react";

const jobPosts = [
  {
    id: 1,
    plan: "Monthly",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
  },
  {
    id: 2,
    plan: "Yearly",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3467/3467216.png",
  },
  {
    id: 3,
    plan: "Monthly",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
  },
  {
    id: 4,
    plan: "Daily",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3467/3467216.png",
  },
  {
    id: 5,
    plan: "Daily",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  },
  {
    id: 6,
    plan: "Monthly",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3274/3274430.png",
  },
  {
    id: 7,
    plan: "Daily",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3125/3125713.png",
  },
  {
    id: 8,
    plan: "Yearly",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png",
  },
  {
    id: 9,
    plan: "Daily",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  },
  {
    id: 10,
    plan: "Daily",
    price: "$199.00",
    title: "Video Editor for Creative Projects",
    image: "https://cdn-icons-png.flaticon.com/512/3274/3274430.png",
  },
];

export default function PostJobsPage() {
  return (
    <div className="bg-[#f6f3ed] min-h-screen p-14 md:p-20 ">
      <div className="w-full h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-business-simple-exhibition-board-jobs-image_22339.jpg"
          alt=""
        />
      </div>
      <div className="relative h-[250px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/header-bg.jpg')" }}>
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold">Job Post</h1>
          <p className="mt-2 text-xl">
            <span className="text-green-500">Check out our job posts</span>
          </p>
        </div>
      </div>
      {/* Filters */}
      <div className="max-w-7xl mx-auto p-6 flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Search.."
          className="p-2  text-black rounded w-full sm:w-60 border"
        />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {jobPosts.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl p-4 shadow-sm text-center"
          >
            <span className="text-sm bg-gray-100 px-3 py-1 text-black rounded-full inline-block mb-4">
              {job.plan}
            </span>
            <img
              src={job.image}
              alt="Job Icon"
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 mb-1">From - {job.price}</p>
            <h2 className="font-semibold text-black text-lg mb-4">
              {job.title}
            </h2>
            <button className="w-full bg-[#f9f6ef] hover:bg-[#eae6da] text-black rounded-full py-2 flex items-center justify-center gap-2 transition">
              Apply Now <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
