// pages/Home.jsx
import React from "react";
import CategoryNav from "../components/CategoryNav";
import HeroSection from "../components/HeroSection";
import CategorySlider from "../components/CategorySlider";
import FeaturedServices from "../components/Featured Services";
import CVPromotion from "../components/CVPromotion";
import TopSellers from "../components/TopSellers";
import Recent from "../components/Recent";
import TalentBanner from "../components/TalentBanner";
import TestimonialSection from "../components/TestimonialSection";

export default function Home({ language, currency }) {
  return (
    <>
      <CategoryNav />
      <HeroSection language={language} currency={currency} />
      <CategorySlider language={language} />
      <FeaturedServices />
      <CVPromotion />
      <TopSellers />
      <Recent />
      <TalentBanner/>
      <TestimonialSection/>
    </>
  );
}
