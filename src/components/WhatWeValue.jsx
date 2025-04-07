'use client';

import Image from 'next/image';
import leaf from '../../public/assets/WhatWeValue/leaf.png';
import meeting from '../../public/assets/WhatWeValue/meeting.png';
import map from '../../public/assets/WhatWeValue/map.png';
import recycle from '../../public/assets/WhatWeValue/recycle.png';

const cards = [
  { image: leaf, text: 'Sustainable Practices' },
  { image: meeting, text: 'People Centric Approach' },
  { image: map, text: 'Innovation & Strategy' },
  { image: recycle, text: 'Eco Responsibility' },
];

export default function WhatWeValue() {
  return (
    <section className="px-4 py-10 md:py-20 bg-white text-center relative">
      <style jsx>{`
        .overlay-text > p {
          opacity: 0;
          transform: translateY(40%);
        }

        .group:hover .overlay-text > p:nth-child(1) {
          animation: slideUp 0.4s ease-out forwards;
          animation-delay: 0.1s;
        }

        .group:hover .overlay-text > p:nth-child(2) {
          animation: slideUp 0.5s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40%);
          }
          100% {
            opacity: 1;
            transform: translateY(0%);
          }
        }
      `}</style>

      <h2 className="text-3xl md:text-4xl font-medium mb-12">
        What We <span className="font-bold">Value</span>
      </h2>

      {/* Responsive Grid: 1col (mobile), 2col (tablet), 4col (desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  md:mx-15 mx-7">
        {cards.map((card, index) => {
          const words = card.text.split(' ');
          const mid = Math.ceil(words.length / 2);
          const firstLine = words.slice(0, mid).join(' ');
          const secondLine = words.slice(mid).join(' ');

          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[330px]"
            >
              <Image
                src={card.image}
                alt={card.text}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 overlay-text pointer-events-none">
                <p className="text-white text-lg font-bold">{firstLine}</p>
                <p className="text-white text-lg font-bold">{secondLine}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-10 w-[147px] h-[44px] px-6 py-2 cursor-pointer bg-[#1F4B43] text-white rounded-[10px] shadow hover:bg-green-800 transition">
        Brand Story
      </button>
    </section>
  );
}
