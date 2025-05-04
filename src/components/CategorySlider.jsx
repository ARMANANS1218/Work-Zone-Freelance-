import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronLeft, ChevronRight, Code, Camera, Paintbrush, Cpu, Video,
  BarChart, Briefcase, Building, BookUser, BrainCircuit, PieChart
} from 'lucide-react';

const translations = {
  hi: {
    heading: 'हमारी लोकप्रिय श्रेणियाँ',
    subtext: '86K+ कौशल से प्रेरणा प्राप्त करें',
    services: 'सेवाएं',
  },
  en: {
    heading: 'Our Popular Categories',
    subtext: 'Get inspired by 86K+ skills',
    services: 'services',
  }
};

const CategorySlider = ({ language = 'hi' }) => {
  const slides = [
    [
      { title: { en: 'Development & IT', hi: 'डेवलपमेंट और आईटी' }, services: 0, icon: <Code /> },
      { title: { en: 'Photography', hi: 'फोटोग्राफी' }, services: 0, icon: <Camera /> },
      { title: { en: 'Design & Creative', hi: 'डिज़ाइन और क्रिएटिव' }, services: 1, icon: <Paintbrush /> },
      { title: { en: 'Programming', hi: 'प्रोग्रामिंग' }, services: 0, icon: <Cpu /> },
      { title: { en: 'Video & Animation', hi: 'वीडियो और एनीमेशन' }, services: 0, icon: <Video /> },
      { title: { en: 'Digital Marketing', hi: 'डिजिटल मार्केटिंग' }, services: 0, icon: <BarChart /> },
    ],
    [
      { title: { en: 'Sales & Marketing', hi: 'सेल्स और मार्केटिंग' }, services: 0, icon: <Briefcase /> },
      { title: { en: 'Architecture', hi: 'आर्किटेक्चर' }, services: 0, icon: <Building /> },
      { title: { en: 'Branding Design', hi: 'ब्रांडिंग डिज़ाइन' }, services: 1, icon: <BookUser /> },
      { title: { en: 'AI Services', hi: 'एआई सेवाएं' }, services: 1, icon: <BrainCircuit /> },
      { title: { en: 'Business Style', hi: 'बिजनेस स्टाइल' }, services: 0, icon: <PieChart /> },
      { title: { en: 'Web Development', hi: 'वेब डेवलपमेंट' }, services: 2, icon: <Code /> },
    ],
    [
      { title: { en: 'Game Design', hi: 'गेम डिज़ाइन' }, services: 1, icon: <Paintbrush /> },
      { title: { en: 'UI/UX Design', hi: 'यूआई/यूएक्स डिज़ाइन' }, services: 2, icon: <BookUser /> },
      { title: { en: 'Social Media', hi: 'सोशल मीडिया' }, services: 1, icon: <BarChart /> },
      { title: { en: 'SEO Optimization', hi: 'एसईओ ऑप्टिमाइज़ेशन' }, services: 0, icon: <PieChart /> },
      { title: { en: 'Content Writing', hi: 'कंटेंट राइटिंग' }, services: 1, icon: <Briefcase /> },
      { title: { en: 'Mobile Development', hi: 'मोबाइल डेवलपमेंट' }, services: 2, icon: <Cpu /> },
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="bg-[#f9f7f3] p-8 rounded-xl relative w-full min-h-[500px]">
    <h2 className="text-3xl text-green-800 font-bold mb-2">
      {translations[language].heading}
    </h2>
    <p className="text-green-500 mb-6">{translations[language].subtext}</p>
  
    {/* Wrapper with relative to position arrows */}
    <div className="relative w-full flex justify-center items-center">
      {/* Slider container - width limited to center it */}
      <div
        className="w-[90%] relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((group, i) => (
            <div
              key={i}
              className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {group.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow text-center h-64 flex flex-col justify-center items-center"
                >
                  <div className="text-indigo-600 text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.title[language]}
                  </h3>
                  <p className="text-gray-500">
                    {item.services} {translations[language].services}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
  
      {/* Arrows - positioned relative to full wrapper, not clipped anymore */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-500 text-white border rounded-full p-2 shadow hover:bg-green-600 z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-500 text-white border rounded-full p-2 shadow hover:bg-green-600 z-10"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
  
  );
};

export default CategorySlider;
