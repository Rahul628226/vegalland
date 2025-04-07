'use client';

import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaArrowUpRightFromSquare } from "react-icons/fa6";
import logo from '../../public/assets/logo.png';
import Image from 'next/image';


export default function PropertyFilterPage() {

  return (
    <>
      <footer className="bg-[#0b1121] text-white py-10 md:px-15 px-[10px]">
        <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-start justify-center items-center">
          
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:ml-[10px] w-full md:max-w-[350px] text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image src={logo} alt="Veegaland Logo" className="w-32 mb-4" />
            </div>
            <p className="mb-4">Veegaland Homes & Builders PVT LTD</p>
            <div className="flex justify-center md:justify-start items-center gap-2 border-b border-white w-fit mx-auto md:mx-0 pb-1 cursor-pointer hover:text-gray-300">
              <span>Subscribe to Newsletter</span>
              <FaArrowUpRightFromSquare />
            </div>
            <p className="mt-6 text-sm text-gray-400 text-center md:text-left">© 2020 Lift Media. All right reserved</p>
          </div>

          {/* Center Section - Quick Links and Newz */}
          <div className="flex flex-row justify-center items-start md:gap-20 gap-10 w-full md:max-w-[350px] md:mx-0 text-center md:text-left">
            {/* Quick Links */}
            <div className="md:space-y-2">
              <h4 className="font-semibold text-lg mb-2">Quick links</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* News & Media */}
            <div className="md:space-y-2">
              <h4 className="font-semibold text-lg mb-2">Newz</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Press Meet</a></li>
              </ul>
            </div>
          </div>

          {/* Address & Socials */}
          <div className="mt-8 md:mt-16 md:mr-[10px] w-full md:max-w-[300px] text-center md:text-left">
            <p className="text-sm leading-relaxed text-gray-300">
              28CM+JCQ,<br />
              NGO Quarters - Bh College Rd,<br />
              Kakkanad, Kerala<br />
              682021
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-lg mt-4 text-white">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}