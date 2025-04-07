'use client';
import Image from 'next/image';
import villa from '../../public/assets/AboutUsSection/villa.png';
import birds from '../../public/assets/AboutUsSection/birds.png';

export default function AboutUsSection() {
  return (
    <section
      className="hidden md:block relative bg-white px-20 py-10 md:py-40 overflow-hidden min-h-[630px] "
    >
      {/* Background with Villa Image */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[100%] z-0 mt-17"
        style={{ height: '559px' }}
      >
        <div className="relative w-full h-full">
          <Image
            src={villa}
            alt="Villa"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* Text Content Overlaid on Image */}
      <div className="absolute top-0 left-0 right-0 mx-20 flex flex-col lg:flex-row items-start justify-between z-10">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-black mt-[0px]">
          <p className="text-sm text-gray-600 mb-2">About Us</p>
          <h2 className="text-3xl md:text-3xl font-500 leading-snug mb-4">
            We are a <strong>global, boutique</strong> <br />
            <strong>developer, building</strong>{' '}
            <span className="font-normal">premium</span><br/>
            <span className="font-normal">apartment</span>
          </h2>
        </div>

        {/* Right Text aligned with Left Text */}
        <div className="w-full lg:w-1/2 text-right text-sm text-gray-700 flex flex-col items-end self-start mt-18">
          <p>
            Crafting modern homes with excellence. Elevating lifestyles <br />
            through innovation and design. Creating vibrant communities <br />
            with precision and care.
          </p>
          <Image
            src={birds}
            alt="Birds flying"
            width={200}
            height={80}
            priority
          />
        </div>
      </div>
    </section>
  );
}
