'use client';

import { useState, useEffect, useRef } from 'react';

const properties = [
  { id: 1, type: 'Town House', count: 2, image: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744014273/vegalland/3ae8d7c2-2da4-4651-8c22-fe0063e164f8.png', city: 'New York' },
  { id: 2, type: 'Modern Villa', count: 10, image: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744014289/vegalland/7d22842f-dbc0-48e4-80d4-6fc85a6fc83e.png', city: 'Los Angeles' },
  { id: 3, type: 'Apartment', count: 3, image: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744014225/vegalland/87ebe571-07ef-457c-a102-aa0d6cdce313.png', city: 'Chicago' },
  { id: 4, type: 'Single Family', count: 5, image: 'https://res.cloudinary.com/dq2onzzcd/image/upload/v1744014256/vegalland/a6f4e8e4-5ffc-495c-bad5-2ca9d500cf9a.png', city: 'Miami' },
];

const cities = [...new Set(properties.map(p => p.city))];
const types = [...new Set(properties.map(p => p.type))];

export default function PropertyFilterPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const propertyRefs = useRef([]);
  const sectionRef = useRef(null);

  const filtered = properties.filter(p =>
    (selectedCity ? p.city === selectedCity : true) &&
    (selectedType ? p.type === selectedType : true)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint

        propertyRefs.current.forEach((property, index) => {
          if (!property) return;

          if (isMobile) {
            // Mobile: trigger effect when property is in view
            const propertyTop = property.getBoundingClientRect().top;
            const propertyHeight = property.offsetHeight;
            
            if (propertyTop < windowHeight * 0.75 && propertyTop + propertyHeight > 0) {
              property.classList.add('active');
            }
          } else {
            // Desktop: fade in properties one by one with slower effect
            const propertyTop = property.getBoundingClientRect().top;
            const delay = index * 0.2; // Increased delay between properties
            
            if (propertyTop < windowHeight * 0.75) {
              property.style.transition = `opacity 0.8s ${delay}s ease-out, transform 0.8s ${delay}s ease-out`;
              property.style.opacity = '1';
              property.style.transform = 'translateY(0)';
            }
          }
        });
      }
    };

    // Initialize desktop properties to hidden state
    if (window.innerWidth >= 768) {
      propertyRefs.current.forEach((property) => {
        if (property) {
          property.style.opacity = '0';
          property.style.transform = 'translateY(30px)';
          property.style.transition = 'none';
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filtered]);

  return (
    <div ref={sectionRef} className="md:mx-18 mt-10">
      <style jsx>{`
        .property-card .property-content {
          opacity: 1; /* Changed to always visible */
          transform: translateY(0); /* Changed to always visible */
        }

        .property-card .property-content h2,
        .property-card .property-content p {
          opacity: 1; /* Changed to always visible */
          transform: translateY(0); /* Changed to always visible */
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className='my-5 mx-4 md:mx-0'>
          <h1 className="text-2xl md:text-4xl font-light mb-2">
            Find the <span className="font-bold">Best Choice</span> for You
          </h1>
          <p className="text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 mx-4 md:mx-0">
          <select
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
            className="p-2 rounded shadow w-full sm:w-40 md:w-48 text-sm bg-[white]"
          >
            <option value="">Choose City</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>

          <select
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}
            className="p-2 rounded shadow w-full sm:w-40 md:w-48 text-sm bg-[white]"
          >
            <option value="">Choose Property</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filtered.map((property, index) => (
          <div 
            key={property.id} 
            ref={(el) => propertyRefs.current[index] = el}
            className="property-card relative rounded-lg shadow-md overflow-hidden w-full max-w-[266px] group"
            style={{
              height: '338.11px',
              backgroundImage: `url(${property.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="property-content relative h-full flex flex-col justify-between p-4">
              <div className="pt-6 pl-6">
                <h2 className="text-black font-medium text-lg">{property.type}</h2>
                <p className="text-black text-sm">{property.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}