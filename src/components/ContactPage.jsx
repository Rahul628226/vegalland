'use client';
import Image from 'next/image';
import Avatar from '../../public/assets/Contact/Avatar.png';

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-20 bg-white overflow-hidden md:mt-20 mt-10">
      {/* Left - Form */}
      <div className="w-full md:w-[45%] md:mr-6 p-6 md:p-10 flex flex-col justify-center bg-[#DEE8DC]  rounded-[10px]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-2">Contact Our Team</h2>
        <p className="text-gray-600 mb-8">Ready to start? Let’s chat about how we can help</p>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-bold text-black mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md  bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-black mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="font-bold text-black mb-1 block">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="mb-4">
          <label className="font-bold text-black mb-1 block">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-300 transition duration-300 mb-6">
          Continue
        </button>

        {/* Join Community */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center">
            <Image
              src={Avatar}
              alt="Community"
              width={50}
              height={50}
              className="rounded-full mr-3"
            />
            <div>
              <h4 className="font-semibold text-black">Join our Community</h4>
              <p className="text-sm text-gray-600">Be part of our community for a reason</p>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-full md:w-[55%] h-[300px] md:h-auto relative mt-4 md:mt-0  rounded-[10px]">
        <Image
          src="https://res.cloudinary.com/dq2onzzcd/image/upload/v1744019401/vegalland/7df3958f-7a8a-4d10-abc4-2b4267c71f74.png"
          alt="Hero"
          objectFit="cover"
          fill
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
}
