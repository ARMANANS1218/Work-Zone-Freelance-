import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header({ setLanguage, setCurrency }) {
  const [showPages, setShowPages] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pagesRef = useRef(null);
  const currencyRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pagesRef.current && !pagesRef.current.contains(event.target) &&
        currencyRef.current && !currencyRef.current.contains(event.target) &&
        languageRef.current && !languageRef.current.contains(event.target)
      ) {
        setShowPages(false);
        setShowCurrency(false);
        setShowLanguage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white text-black p-4 sticky top-0 z-50 ">
      <div className="flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-lg hover:text-green-700 hover:scale-110">
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 text-white px-2 py-1 rounded-full font-bold">Work</div>
          <span className="text-green-600 font-bold">zone</span>
        </div></Link>
        

        {/* Hamburger button below 1200px */}
        <div className="xl:hidden fixed top-4 right-4 z-[999]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl p-2 text-black focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav for xl and above */}
        <nav className="hidden xl:flex justify-center items-center space-x-6  flex-1">
          <Link to="/" className="text-lg hover:text-green-700 hover:scale-110">Home</Link>
          <Link to="/services" className="text-lg hover:text-green-700 hover:scale-110">Services</Link>
          <Link to="/jobposts" className="text-lg hover:text-green-700 hover:scale-110">Job Post</Link>
          <Link to="/freelancers" className="text-lg hover:text-green-700 hover:scale-110">Freelancers</Link>

         
          <div className="relative" ref={pagesRef} onClick={() => setShowPages((prev) => !prev)}>
            <button className="focus:outline-none hover:text-green-700 hover:scale-110 text-lg">Pages ▾</button>
            {showPages && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                {["Subscription Plan", "About Us", "Our Blogs", "Privacy Policy", "Terms & Conditions", "FAQ", "Custom Page One", "Custom Page Two"].map((item) => (
                  <a href="#" key={item} className="block px-4 py-2 hover:bg-gray-100">{item}</a>
                ))}
              </div>
            )}
          </div>
          <a className= "text-lg hover:text-green-700 hover:scale-120 " href="#">Contact</a>
        </nav>

        {/* Desktop Controls */}
        <div className="hidden xl:flex items-center space-x-4">
          <div className="relative" ref={currencyRef} onClick={() => setShowCurrency(!showCurrency)}>
            <button className="focus:outline-none">$ USD ▾</button>
            {showCurrency && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg">
                <button onClick={() => setCurrency("USD")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">USD</button>
                <button onClick={() => setCurrency("INR")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">INR</button>
              </div>
            )}
          </div>
          <div className="relative" ref={languageRef} onClick={() => setShowLanguage(!showLanguage)}>
            <button className="focus:outline-none">🌐 English ▾</button>
            {showLanguage && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg">
                <button onClick={() => setLanguage("en")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">English</button>
                <button onClick={() => setLanguage("hi")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Hindi</button>
              </div>
            )}
          </div>
          <button className="bg-green-500 text-white px-4 py-1 rounded-full">Sign In</button>
        </div>
      </div>

      {/* Mobile Menu (Below 1200px) */}
      {menuOpen && (
        <div className="xl:hidden fixed top-16 left-0 w-full bg-white text-center shadow-lg z-50 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Job Post</a>
            <a href="#">Freelancers</a>
            <div className="relative">
              <button onClick={() => setShowPages(!showPages)}>Pages ▾</button>
              {showPages && (
                <div className="mt-2 w-full bg-white text-black shadow-lg rounded-lg">
                  {["Subscription Plan", "About Us", "Our Blogs", "Privacy Policy", "Terms & Conditions", "FAQ", "Custom Page One", "Custom Page Two"].map((item) => (
                    <a href="#" key={item} className="block px-4 py-2 hover:bg-gray-100">{item}</a>
                  ))}
                </div>
              )}
            </div>
            <a href="#">Contact</a>
            <div className="relative">
              <button onClick={() => setShowCurrency(!showCurrency)}>$ USD ▾</button>
              {showCurrency && (
                <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                  <button onClick={() => setCurrency("USD")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">USD</button>
                  <button onClick={() => setCurrency("INR")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">INR</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setShowLanguage(!showLanguage)}>🌐 English ▾</button>
              {showLanguage && (
                <div className="mt-2 w-full bg-white shadow-lg rounded-lg">
                  <button onClick={() => setLanguage("en")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">English</button>
                  <button onClick={() => setLanguage("hi")} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Hindi</button>
                </div>
              )}
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">Sign In</button>
          </div>
        </div>
      )}
    </header>
  );
}
