'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerData = [
  {
    id: 1,
    desktopImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
    mobileImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
  },
  {
    id: 2,
    desktopImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
    mobileImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
  },
  {
    id: 3,
    desktopImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
    mobileImage: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744083166/vegalland/19e18884-5ff5-4bc7-baf9-d204d7b7e680.png',
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % bannerData.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + bannerData.length) % bannerData.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden md:mt-40 mt-20">
        {bannerData.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={isMobile ? banner.mobileImage : banner.desktopImage}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Always visible arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow z-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* CTA Button moved below slider */}
      <div className="pt-6 flex justify-center">
        <button className="bg-[#558D4C] hover:bg-green-700 text-white px-6 py-2 rounded-[10px] shadow">
          View All Properties
        </button>
      </div>
    </>
  );
}
