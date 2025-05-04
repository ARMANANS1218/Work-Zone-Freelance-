import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import HeroSection from "./components/HeroSection";
import ChatButton from "./components/ChatButton";
import CategorySlider from "./components/CategorySlider";
import FeaturedServices from "./components/Featured Services";
import CVPromotion from "./components/CVPromotion";
import TopSellers from "./components/TopSellers";
import Recent from "./components/Recent";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import JobPosts from "./pages/JobPosts";
import Freelance from "./pages/Freelance";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");

  return (
    <Router>
      <div className="bg-green-900 text-white min-h-screen">
        <Header setLanguage={setLanguage} setCurrency={setCurrency} />
        
        <Routes>
          <Route
            path="/"
            element={
              <Home language={language} currency={currency} />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/jobposts" element={<JobPosts/>} />
          <Route path="/freelancers" element={<Freelance/>} />
        </Routes>

        <Footer />
        <ChatButton />
      </div>
    </Router>
  );
}
