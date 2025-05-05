// TopSellers.jsx
import React from "react";

const sellers = [
  {
    name: "David Miller",
    role: "Web Designer",
    price: "$25.00/hr",
    rating: "3.0",
    reviews: "1",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/david-miller-2024-07-10-11-47-42-9536.png", // Replace with actual paths
  },
  {
    name: "Madge Jordan",
    role: "Graphic Designer",
    price: "$20.00/hr",
    rating: "0.0",
    reviews: "0",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/madge-jordan-2024-07-10-11-45-29-6149.png",
  },
  {
    name: "Naymr Jhon",
    role: "Graphic Designer",
    price: "$15.00/hr",
    rating: "0.0",
    reviews: "0",
    image: "https://workzone.mamunuiux.com/uploads/custom-images/naymr-jhon-2024-07-10-11-43-55-9474.png",
  },
  {
    name: "David Simonssss",
    role: "Laravel Developer",
    price: "$10.00/hr",
    rating: "0.0",
    reviews: "0",
    verified: true,
    image: "https://workzone.mamunuiux.com/uploads/custom-images/david-simmonsss-2024-07-10-11-42-35-3948.png",
  },
  {
    name: "David Richard",
    role: "Laravel Developer",
    price: "$10.00/hr",
    rating: "4.0",
    reviews: "3",
    verified: true,
    image: "https://workzone.mamunuiux.com/uploads/custom-images/david-richard-2024-07-10-11-40-49-2937.png",
  },
];

const TopSellers = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Top Seller</h2>
            <p className="text-gray-500">Find our best service provider</p>
          </div>
          <a href="#" className="text-blue-600 hover:underline flex items-center">
            View More <span className="ml-1">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="text-sm text-gray-500 mb-1">Top Seller</div>
              <div className="text-green-600 font-semibold">{seller.price}</div>
              <img
                src={seller.image}
                alt={seller.name}
                className="w-20 h-20 rounded-full mx-auto my-4"
              />
              <h3 className="text-lg font-semibold">{seller.name}{" "}
                {seller.verified && (
                  <span className="text-green-500">✔</span>
                )}
              </h3>
              <p className="text-gray-500 text-sm">{seller.role}</p>
              <p className="text-sm mt-1">
                ★ {seller.rating} ({seller.reviews} Reviews)
              </p>
              <button className="mt-4 bg-gray-400 hover:bg-green-500 text-sm px-4 py-2 rounded-full">
                View Profile →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
