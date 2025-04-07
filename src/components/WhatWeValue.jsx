'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint

        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          if (isMobile) {
            // Mobile: trigger hover effect when card is in view
            const cardTop = card.getBoundingClientRect().top;
            const cardHeight = card.offsetHeight;
            
            if (cardTop < windowHeight * 0.75 && cardTop + cardHeight > 0) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          } else {
            // Desktop: fade in cards one by one with slower effect
            const cardTop = card.getBoundingClientRect().top;
            const delay = index * 0.2; // Increased delay between cards
            
            if (cardTop < windowHeight * 0.75) {
              card.style.transition = `opacity 0.8s ${delay}s ease-out, transform 0.8s ${delay}s ease-out`;
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }
          }
        });
      }
    };

    // Initialize desktop cards to hidden state
    if (window.innerWidth >= 768) {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)'; // Slightly increased initial offset
          card.style.transition = 'none'; // Prevent initial animation
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-10 md:py-20 bg-white text-center relative">
      <style jsx>{`
        .overlay-text > p {
          opacity: 0;
          transform: translateY(40%);
        }

        .group:hover .overlay-text > p:nth-child(1),
        .group.active .overlay-text > p:nth-child(1) {
          animation: slideUp 0.5s ease-out forwards;
          animation-delay: 0.2s;
        }

        .group:hover .overlay-text > p:nth-child(2),
        .group.active .overlay-text > p:nth-child(2) {
          animation: slideUp 0.6s ease-out forwards;
          animation-delay: 0.4s;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-15 mx-7">
        {cards.map((card, index) => {
          const words = card.text.split(' ');
          const mid = Math.ceil(words.length / 2);
          const firstLine = words.slice(0, mid).join(' ');
          const secondLine = words.slice(mid).join(' ');

          return (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer h-[330px]"
            >
              <Image
                src={card.image}
                alt={card.text}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
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