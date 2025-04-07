import AboutUsSection from "@/components/AboutUsSection";
import BannerSlider from "@/components/BannerSlider";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroMapSection from "@/components/HeroMapSection";
import HeroQuote from "@/components/HeroQuote";
import PropertyFilterPage from "@/components/PropertyFilterPage";
import WhatWeValue from "@/components/WhatWeValue";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Header />
      <Hero />
      <WhatWeValue/>
      <AboutUsSection/>
      <PropertyFilterPage/>
      <BannerSlider/>
      <HeroQuote/>
      <ContactPage/>
      <HeroMapSection/>
      <Footer/>
    </div>
  );
}
