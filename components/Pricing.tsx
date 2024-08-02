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
    <section id='Pricing' className={styles.pricingSection}>
       <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <span className='text-[#F27405] font-light font-rubik'>OUR PRICING</span>
        <br />
        <br />
        <br />
      </div>
      <div className=" flex lg:flex-row flex-col lg:w-[1248px] w-full gap-5 justify-center items-center">
        <Pcard className='flex flex-col p-5 lg:w-1/3 w-[83vw] shadow-lg justify-center items-center bg-white' 
               data-aos="flip-left" data-aos-duration="2000">
          <PcardHeader>
            <PcardPreTitle>Free</PcardPreTitle>
            <PcardPreTitle2  className='mx-auto'>Monthly Charge</PcardPreTitle2>
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
              <p>File Upload & Google drive(1 folder)</p>
              <br />
              <p>10 queries/month</p>
              <br />
              <p>5 views</p>
              <br />
              <p>2 users</p>
              <br />
              <p>Chat & Email support with a 24-hour response time</p>
              <br />
              <p>Up to 50 MB</p>
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
            <PcardPreTitle>Standard</PcardPreTitle>
            <PcardPreTitle2>Monthly Charge</PcardPreTitle2>
            <br />
            <PcardTitle>$25</PcardTitle>
          </PcardHeader>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardContent>
            <div className="flex flex-col items-center justify-center">
              <p>Access to all supported data sources</p>
              <br />
              <p>100 queries/month</p>
              <br />
              <p>50 views</p>
              <br />
              <p>15 users</p>
              <br />
              <p>Priority chat & email support with a 12-hour response time</p>
              <br />
              <p>Up to 1 GB</p>
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
            <PcardPreTitle style={{ color: '#ffffff' }}>Enterprise
            </PcardPreTitle>
            <PcardPreTitle2 style={{ color: '#ffffff' }}>Monthly Charge</PcardPreTitle2>
            <br />
            <PcardTitle style={{ color: '#ffffff', textAlign:'center' }}>Contact Sales for Pricing</PcardTitle>
          </PcardHeader>
          <br />
          <br />
          <Separator />
          <br />
          <br />
          <PcardContent>
            <div className="flex flex-col items-center justify-center">
              <p style={{ color: '#ffffff', flex:'display', justifyItems:'center', alignContent:'center', margin:'auto'}}>Unlimited access including custom integrations</p>
              <br />
              <p style={{ color: '#ffffff' }}>Unlimited queries</p>
              <br />
              <p style={{ color: '#ffffff' }}>Unlimited</p>
              <br />
              <p style={{ color: '#ffffff' }}>Unlimited users</p>
              <br />
              <p style={{ color: '#ffffff' }}>Dedicated account manager and 24/7 support</p>
              <br />
              <p style={{ color: '#ffffff', flex:'display', justifyItems:'center', alignContent:'center', margin:'auto' }}>5 GB (Custom storage tailored to business needs)</p>
              <br />
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
      </div>
      {/* <div id="header" data-aos="zoom-in" data-aos-duration="2000">
        <Image src="/images/price.png" alt="Hero Image" width={1440} height={1000} />
      </div> */}
      {/* <div id="header" data-aos="fade-up" data-aos-duration="2000">
        {/* <p className=' text-center font-light py-10 text-sm'>Additional tokens may be purchsed for high frequency users (Contact sales for a custom plan)</p> */}
        {/* <br />
        <br />
      // </div> */}  
      {/* <div className="flex flex-col items-center">
        <a className='font-rubik' href="https://wa.link/j508ug" target="_blank" rel="noopener noreferrer">
              <button style={{ border: '1px solid #F27405', borderRadius: '25px', color: '#F27405', fontWeight: 'bold', padding: '12px 80px', marginBottom: '10px' }} 
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F27405'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#F27405'; }}>
                Contact Sales
              </button>
        </a>
      </div> */}
    </section>
  );
};

export default Pricing;
