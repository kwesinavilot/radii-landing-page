import React from 'react';
import myImage from '../public/images/Features BG.png';
import DashboardImage from '../public/images/dashboard.png';
import insightImage from '../public/images/insight.png';
import intelligenceImage from '../public/images/intelligence.png';
import competitiveImage from '../public/images/competitive.png';
import Image from 'next/image';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const Features = () => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='Features' className='relative h-[100vh] px-[1rem] lg:px-0 flex justify-center items-center'>
            <div className='flex max-w-[1240px] flex-col md:flex-row'>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="flex flex-col justify-center md:w-1/2 text-center lg:text-start"
                >
                    <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <p className='text-[#F27405] text-start font-light pt-12'>OUR FEATURE</p>
        <br />
        
      </div>
                    <h1 className='text-4xl lg:text-6xl font-bold my-4'>Why Choose Us</h1>
                    <p>Radii empowers businesses with data-driven insights to make informed decisions and achieve strategic growth.</p>
                </div>
                <div className="md:w-1/2 my-10">
                    <div className='border rounded-lg overflow-hidden shadow-lg p-3'
                        data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className='flex items-center gap-6'>
                            <Image src={DashboardImage} alt='Dashboard Image' width={100} height={100} />
                            <div>
                                <h6 className='text-lg font-bold'>Custom Dashboards</h6>
                                <p className='text-xs'>Create personalized dashboards and visualizations with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden p-3'
                        data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className='flex items-center gap-6'>
                            <Image src={insightImage} alt='Dashboard Image' width={100} height={100} />
                            <div>
                                <h6 className='text-lg font-bold'>Real-Time Analytics</h6>
                                <p className='text-xs'>Access up-to-date information to drive informed decision-making.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''
                        data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className='flex items-center gap-6'>
                            <Image src={intelligenceImage} alt='Dashboard Image' width={100} height={100} />
                            <div>
                                <h6 className='text-lg font-bold'>AI-Powered Insights</h6>
                                <p className='text-xs'>Leverage artificial intelligence to generate meaningful insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden p-3'
                        data-aos="zoom-in-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className='flex items-center gap-6'>
                            <Image src={competitiveImage} alt='Dashboard Image' width={100} height={100} />
                            <div>
                                <h6 className='text-lg font-bold'>Unified Data Source</h6>
                                <p className='text-xs'>Consolidate all your data for a complete, accurate view.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={myImage} alt='Features BG' width={473.39} height={473.39} className='absolute top-0 left-0' />
        </section>
    );
};

export default Features;
