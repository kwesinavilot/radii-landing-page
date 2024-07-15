import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import { BsPlayCircle } from "react-icons/bs";
import { Card } from 'react-bootstrap'; // or your preferred library
import { Button } from './ui/button';
import { useState } from 'react';

const HeroSection = () => {
  const [herobutton, setButton] = useState(false);
  return (
    <section className="lg:flex py-20">
      <div className="flex flex-col lg:flex-row z-10 items-center relative lg:flex gap-4 lg:gap-0 top-10 ">
        <div className="lg:w-[50%] lg:px-32 mx-auto text-start lg:text-start px-4 py-10">
          <p className="text-[#F27405] font-light">UNLOCK YOUR BUSINESS POTENTIAL</p>
          <h1 className="text-2xl mt-4 lg:text-6xl font-bold relative after:absolute after:content-[''] after:top-0 after:bg">Eliminate Guesswork,<br />Drive Growth</h1>
          <p className="lg:my-8 my-2">Stop relying on trial and error. Integrate all your data sources to unlock actionable insights and make strategic decisions that propel your business forward.</p>
          
          <div className="bg-white shadow-lg absolute left-0 lg:w-[40%] p-4 lg:ps-[8rem] rounded-ee-[1rem] rounded-se-[1rem]">
            <div className="flex gap-12">
              <a
                onClick={() => setButton(!herobutton)}
                href="https://app.getradii.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F27405] text-white px-4 cursor-pointer py-2 text-l rounded-xl"
              >
                Try It Now
              </a>

              <div className="flex items-center gap-2">
              <BsPlayCircle color="#F27405" size="2em" />
              <a
                onClick={() => setButton(!herobutton)}
                href="https://youtu.be/ihEpnzgt_Yc"
                target="_blank"
                rel="noopener noreferrer"
                className=''
              >
                Play Demo
              </a>
              </div>
            </div>
          </div>
          {/* <div className="absolute lg:-left-14 -left-10 w-40 lg:w-full">
            <Image src="/images/Arrow.png" alt='arrow' width={290} height={328}/>
          </div> */}
        </div>
        <div className="-order-1 lg:order-2">
          <Image src="/images/HeroImg.png" alt="Hero Image" width={712} height={712} />
          {/* <Image className={`${styles.theImage} absolute top-32`} src="/images/laptop_mockup2.png" alt="Laptop Image" width={712} height={712} /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
