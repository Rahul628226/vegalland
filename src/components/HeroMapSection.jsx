import Image from 'next/image';
import heromap from '../../public/assets/Map.png'

export default function HeroMapSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] mt-10 md:mt-20">
      {/* Background Image */}
      <Image
        src={heromap}
        alt="Map Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/100 to-transparent z-10 flex flex-col items-center justify-start pt-16 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Find the Best Property for You
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-xl mb-6">
          Choose your property and select the best suits for you, with near by accessibility, locations, places for your convenience
        </p>
        <button className="bg-[#558D4C] hover:bg-green-700 text-white px-6 py-3 rounded-[10px] font-semibold transition">
          View Property
        </button>
      </div>
    </div>
  );
}
