import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FaPlusSquare } from "react-icons/fa";
import styles from '../styles/Faq.module.css';
import { Separator } from "@/components/ui/separator"// Corrected import statement

const Faq = () => {
  return (
    <section id="FAQs" className='lg:px-32 px-[1rem] my-4 lg:my-8 py-10'>
        <div>
        <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <p className='text-[#F27405] text-start font-light pt-10 pb-2 font-rubik'>FAQs</p>
        </div>
          <h1 className='text-3xl text-left lg:text-6xl font-bold font-volkhov'>Frequently Asked <br />Questions.</h1>
          <br />
        </div>
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
            <AccordionTrigger className='font-rubik'>What types of services does Radii offer?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
            Radii offers data intelligence services tailored for startups and investors in Africa.
            These services include seamless data integration, powerful analytics tools, insightful
            reporting, and collaborative features, all designed to empower users with actionable insights for informed decision-making and strategic growth.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className='font-rubik'>Is my data secure with Radii?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
            Yes, your data security is of utmost importance to us at Radii. We have implemented robust security measures to ensure
            that your data remains safe and protected at all times. Our platform utilizes advanced encryption techniques to safeguard your data during storage and transmission, preventing unauthorized access or breaches. Additionally, we adhere to strict data privacy regulations and industry best practices to maintain the confidentiality and integrity of your information. Our team undergoes regular security audits and assessments to identify and address any potential vulnerabilities, ensuring that your data remains secure.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className='text-start font-rubik'>Can I get a customized report for my specific needs?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
            Yes, absolutely! At Radii, we understand that each user may have unique data needs and requirements. That is why we offer
            customized reporting options tailored to your specific preferences and objectives.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className='font-rubik'>How long does it take to get a report?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
              Our team is committed to delivering accurate and actionable reports to you as efficiently as possible, without compromising on quality.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
            <AccordionTrigger className='font-rubik'>How can I partner with Radii?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
            Contact Radii's partnership or business development team to express your interest in partnering. This can be done through our website contact form. Clearly articulate how your organization can benefit Radii and its customers through collaboration.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
            <AccordionTrigger className='font-rubik'>How do I get started with Radii?</AccordionTrigger>
            <AccordionContent className='font-rubik'>
            Look for a &quot;Get Started&quot; button. This will lead you through a signup process to create your account. 
            You can also request for demos to allow you explore the platform and its features.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </section>
  );
};

export default Faq;