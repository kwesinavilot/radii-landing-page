// src/pages/index.js
import React from 'react';
import WhoWeAre from './WhoWeAre';
import Pricing from './Pricing';
import Faq from './Faq';
import ContactUs from './ContactUs';
import NavigationMenuDemo from './NavigationMenuDemo';
import Image from 'next/image';
import Features from './Features';
import Footer from './Footer';
import partnersImage from '../public/images/Partners.png';
import FooterImage from 'next/image';
import HeroSection from './HeroSection';
import NavigationBar from './NavigationBar';
import { PricingMobile } from './PricingMobile';


export default function Home () {
  return (
    <div className='relative lg:px-0'>
            <Image src="/images/uppercut.png" alt="Uppercut" className="absolute top-0 right-0" width={958} height={733} />
      <div className='flex items-center'>
        <Image src="/images/logoBlack.png" className='z-10 fixed top-5 left-10 hidden' alt='radii logo' width={50} height={50} />
        <NavigationBar/>
      </div>
      <HeroSection />
      <WhoWeAre />
      <Features />
      {/* <Image src={partnersImage} alt='Partners' className=''/> */}
      <div className="hidden lg:block">
        <Pricing />
      </div>
      <div className="lg:hidden">
        <PricingMobile/>
      </div>
      <Faq />
      <ContactUs />
      <Footer/>
    </div>
  );
};


