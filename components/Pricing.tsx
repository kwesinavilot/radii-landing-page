import React, { useEffect } from 'react';
import {
  Pcard,
  PcardContent,
  PcardDescription,
  PcardFooter,
  PcardTitle,
  PcardPreTitle,
  PcardPreTitle2,
  PcardHeader,
} from "./ui/pricingCard";
import { Separator } from "@/components/ui/separator";
import styles from '../styles/Pricing.module.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import Image from 'next/image';

const Pricing = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.pricingSection}>
       <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <span className='text-[#F27405] font-light'>OUR PRICING</span>
        <br />
        <br />
        <br />
      </div>
      {/* <div className=" flex lg:flex-row flex-col lg:w-[1248px] w-full gap-5 justify-center items-center">
        <Pcard className='flex flex-col p-5 lg:w-1/3 w-[83vw] shadow-lg justify-center items-center bg-white' 
               data-aos="flip-left" data-aos-duration="2000">
          <PcardHeader>
            <PcardPreTitle>Lite</PcardPreTitle>
            <PcardPreTitle2>Monthly Charge</PcardPreTitle2>
            <br />
            <div className="flex justify-center">
              <PcardTitle>$0</PcardTitle>
            </div>
          </PcardHeader>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardContent>
            <div className="flex flex-col items-center justify-center">
              <p>Single Use</p>
              <br />
              <p>Input: 1000 tokens</p>
              <br />
              <p>Output: 1000 tokens</p>
              <br />
              <p>Local file integration</p>
              <br />
              <p>Basic Visualization</p>
              <br />
              <p>50MB Storage</p>
            </div>
          </PcardContent>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardFooter>
            <div className="flex flex-col items-center">
              <button style={{ border: '1px solid #F27405', borderRadius: '25px', color: '#F27405', fontWeight: 'bold', padding: '10px 20px', marginBottom: '10px' }} 
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F27405'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F27405'; }}>
                Get Started
              </button>
              <div>
                Start Your 30 Day Free Trial
              </div>
            </div>
          </PcardFooter>
        </Pcard>
        <Pcard className='flex flex-col p-5 lg:w-1/3 w-[83vw] shadow-lg justify-center items-center bg-white'
               data-aos="flip-left" data-aos-duration="2000">
          <PcardHeader>
            <PcardPreTitle>Basic</PcardPreTitle>
            <PcardPreTitle2>Monthly Charge</PcardPreTitle2>
            <br />
            <PcardTitle>$14.99</PcardTitle>
          </PcardHeader>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardContent>
            <div className="flex flex-col items-center justify-center">
              <p>Single Use</p>
              <br />
              <p>Input: 1 million tokens</p>
              <br />
              <p>Output: 1 million tokens</p>
              <br />
              <p>Advanced Visualization</p>
              <br />
              <p>5GB Storage</p>
              <br />
              <p>Workspace Integrations</p>
            </div>
          </PcardContent>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardFooter>
            <div className="flex flex-col items-center">
              <button style={{ border: '1px solid #F27405', borderRadius: '25px', color: '#F27405', fontWeight: 'bold', padding: '10px 20px', marginBottom: '10px' }} 
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F27405'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F27405'; }}>
                Get Started
              </button>
              <div>
                Start Your 30 Day Free Trial
              </div>
            </div>
          </PcardFooter>
        </Pcard>
        <Pcard className='lg:h-[50rem] lg:w-1/3 w-[83vw] flex flex-col p-5 shadow-lg justify-center items-center bg-[#038C7F]'
               data-aos="flip-left" data-aos-duration="2000">
          <PcardHeader>
            <PcardPreTitle style={{ color: '#ffffff' }}>Premium</PcardPreTitle>
            <PcardPreTitle2 style={{ color: '#ffffff' }}>Monthly Charge</PcardPreTitle2>
            <br />
            <PcardTitle style={{ color: '#ffffff' }}>$24.99</PcardTitle>
          </PcardHeader>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardContent>
            <div className="flex flex-col items-center justify-center">
              <p style={{ color: '#ffffff' }}>Single Use</p>
              <br />
              <p style={{ color: '#ffffff' }}>Input: 5 million tokens</p>
              <br />
              <p style={{ color: '#ffffff' }}>Output: 5 million tokens</p>
              <br />
              <p style={{ color: '#ffffff' }}>Advanced Visualization</p>
              <br />
              <p style={{ color: '#ffffff' }}>20GB Storage</p>
              <br />
              <p style={{ color: '#ffffff' }}>Workspace Integrations</p>
            </div>
          </PcardContent>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardFooter>
            <div className="flex flex-col items-center">
              <button style={{ border: '1px solid #F27405', borderRadius: '25px', color: '#F27405', fontWeight: 'bold', padding: '10px 20px', marginBottom: '10px' }} 
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F27405'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F27405'; }}>
                Get Started
              </button>
              <div style={{ color: '#ffffff' }}>
                Start Your 30 Day Free Trial
              </div>
            </div>
          </PcardFooter>
        </Pcard>
      </div> */}
      <div id="header" data-aos="zoom-out" data-aos-duration="2000">
        <Image src="/images/price.png" alt="Hero Image" width={1440} height={1000} />
      </div>
      <div id="header" data-aos="fade-up" data-aos-duration="2000">
        {/* <p className=' text-center font-light py-10 text-sm'>Additional tokens may be purchsed for high frequency users (Contact sales for a custom plan)</p> */}
        <br />
        <br />
      </div>
      <div className="flex flex-col items-center">
              <button style={{ border: '1px solid #F27405', borderRadius: '25px', color: '#F27405', fontWeight: 'bold', padding: '12px 80px', marginBottom: '10px' }} 
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F27405'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F27405'; }}>
                Contact Sales
              </button>
      </div>
    </section>
  );
};

export default Pricing;
