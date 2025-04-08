'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import quote from '../../public/assets/Quote.png';

export default function HeroQuote() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [animatedText, setAnimatedText] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const fullText = "Veegaland Homes builds more than homes – we create sustainable, eco-friendly spaces that harmonize with nature, ensuring a greener, healthier future for generations.";
  const words = fullText.split(' ');

  useEffect(() => {
    // Image load animation with intersection observer
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageLoaded(true);
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setAnimationStarted(true);
            animateText();
            textObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, [animationStarted]);

  const animateText = () => {
    let currentIndex = 0;
    setAnimatedText(''); // Reset text before animation
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setAnimatedText(prev => (prev ? `${prev} ${words[currentIndex]}` : words[currentIndex]));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className="md:mx-20 md:mt-20 mt-10">
      {/* Main Image with scale and fade animation */}
      <div 
        ref={imageRef}
        className={`w-full overflow-hidden transition-all duration-1000 ease-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        <Image
          src="https://res.cloudinary.com/dq2onzzcd/image/upload/v1744018348/vegalland/c5866ec7-a2bd-4243-81d5-d4356c4ec0fa.png"
          alt="Hero Banner"
          width={1392}
          height={680}
          className="w-full h-auto object-cover"
          priority
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      {/* Quote Section */}
      <div className="relative mt-8 px-4 md:px-8">
        {/* Quote icon with bounce and rotation animation */}
        <div className="absolute  left-0">
          <Image
            src={quote}
            alt="Quote Icon"
            width={137}
            height={137}
            className="w-12 h-12 md:w-[137px] md:h-[137px] transition-all duration-500 hover:rotate-12 hover:scale-110"
          />
        </div>

        {/* Text container with word-by-word animation */}
        <div 
          ref={textRef}
          className="text-center text-lg md:text-[40px] font-medium leading-relaxed min-h-[200px] md:min-h-[300px] flex items-center justify-center"
        >
          <div className="opacity-0 animate-fadeIn">
            {animatedText.split(' ').map((word, index) => (
              <span 
                key={index} 
                className="inline-block opacity-0 animate-wordFadeIn mr-1.5 last:mr-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordFadeIn {
          from { 
            opacity: 0;
            transform: translateY(10px) rotate(-2deg);
          }
          to { 
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
          animation-delay: 0.2s;
        }
        .animate-wordFadeIn {
          animation: wordFadeIn 0.6s forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}