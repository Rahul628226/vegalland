'use client';

import { useState } from 'react';

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

  const filtered = properties.filter(p =>
    (selectedCity ? p.city === selectedCity : true) &&
    (selectedType ? p.type === selectedType : true)
  );

  return (
    <div className=" md:mx-18 mt-10">
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
        {filtered.map((property) => (
          <div 
            key={property.id} 
            className="relative rounded-lg shadow-md overflow-hidden w-full max-w-[266px]"
            style={{
              height: '338.11px',
              backgroundImage: `url(${property.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 "></div>
            <div className="relative h-full flex flex-col justify-between p-4">
              <div className="pt-6 pl-6">
                <h2 className="text-[#1A1A1A] font-medium text-lg">{property.type}</h2>
                <p className="text-[#1A1A1A] text-sm">{property.city}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}