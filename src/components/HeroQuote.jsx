'use client';
import Image from 'next/image';
import quote from '../../public/assets/Quote.png'
import herobanner from '../../public/assets/QuoteBanner.png';

export default function HeroQuote() {
  return (
    <div className=" md:mx-20 md:mt-20 mt-10">
      {/* Main Image */}
      <div className="w-full">
        <Image
          src="https://res.cloudinary.com/dq2onzzcd/image/upload/v1744018348/vegalland/c5866ec7-a2bd-4243-81d5-d4356c4ec0fa.png"
          alt="Hero Banner"
          width={1392}
          height={680}
          className="w-full h-auto object-cover "
          priority
        />
      </div>

      {/* Quote Section */}
      <div className="relative mt-8 px-4 md:px-8">
        {/* Quote icon */}
        <div className="absolute -top-10 left-0">
          <Image
            src={quote}
            alt="Quote Icon"
            width={137}
            height={137}
            className="w-12 h-12 md:w-[137px] md:h-[137px]"
          />
        </div>

        {/* Text */}
        <p className="text-center text-lg md:text-[40px] font-medium leading-relaxed">
          Veegaland Homes builds more than homes – we create sustainable, eco-friendly
          spaces that harmonize with nature, ensuring a greener, healthier future for generations.
        </p>
      </div>
    </div>
  );
}
