import React, { useState } from 'react';
import Image from 'next/image';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import axios from 'axios';
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { SeparatorLong } from './ui/seperatorlong';

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const addToWaitlist = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://backend.getradii.com/auxi/waitlists/', {
        email: email,
      });

      setIsSubmitting(false);
      setSuccessMessage(response.data.message);
      onOpen();
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative bg-[#182632] h-[15rem] lg:h-[422px] lg:flex flex-col items-center justify-center">
      <div className="lg:w-full  justify-center">
        {/* <Image
          src="/images/footercut.png"
          alt="footercut"
          width={1070.64}
          height={311}
          className="lg:max-w-[1170.64px] lg:h-[311px] absolute lg:top-[-20%] left-[0.5rem] lg:left-[10.5rem] mx-auto"
        /> */}
        <form className="mx-auto max-w-[500px] p-4" onSubmit={addToWaitlist}>
          <div className="text-center font-bold text-white">
            <p className="lg:text-3xl text-center capitalize">Join our waitlist</p>
            <p className="text-[#9BCAB8] lg:my-4 font-light text-xs">Join and be part of our early testers</p>
          </div>
          <div className="flex items-center lg:gap-2 gap-3">
            <div className="bg-white w-[70%] mx-auto my-2 lg:h-[44px] h-[24px] flex items-center rounded-r rounded-l p-4">
              {isSubmitting ? (
                <Flex alignItems="center">
                  <Text ml={2}>Submitting...</Text>
                </Flex>
              ) : (
                <>
                  <MdOutlineMailOutline className="mr-2" />
                  <Input
                    type="email"
                    name="email"
                    className="h-[18px] border-none placeholder:text-xs placeholder:text-grey"
                    placeholder="Your email"
                    required
                  />
                </>
              )}
            </div>
            <Button
              type="submit"
              className={`lg:h-[44px] h-[32px] lg:p-4 p-2 rounded-l rounded-r bg-[#F27405] hover:bg-[#F27405] ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              Subscribe
            </Button>
          </div>
        </form>
        <div className="bg-gray-600 h-[1px] lg:w-[1040px] mx-auto my-8">
        </div>
        <div className='w-fit mx-auto'>
        <NavigationMenu>
            <NavigationMenuList className="ms-auto hidden lg:flex">
            <NavigationMenuItem>
              <NavigationMenuLink href="/privacy-policy" target='_blank' className={navigationMenuTriggerStyle()}>
                Privacy Policy
              </NavigationMenuLink>
            </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/features" className={navigationMenuTriggerStyle()}>
                  <Link href="/features">Features</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/testimonials" className={navigationMenuTriggerStyle()}>
                  <Link href="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/faqs" className={navigationMenuTriggerStyle()}>
                  <Link href="/faqs">FAQs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contacts" className={navigationMenuTriggerStyle()}>
                  <Link href="/contacts">Contacts</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/signup" className={navigationMenuTriggerStyle()} style={{ color: '#F27405', borderRadius: '20px', backgroundColor: '#FFFFFF' }}>
                  <Link href="https://app.getradii.com/signin">Login</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>

        </div>
      </div>
      <div className="flex max-w-[1200px] absolute bottom-0 lg:relative w-full">
        <SubFooter />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white" p={5}>
          <ModalHeader className="font-bold text-4xl text-center">Message Received!</ModalHeader>
          <ModalBody>
            <Text mb={4} textAlign="center">
              Thank you for reaching out to us. We have received your message and will get back to you shortly.
            </Text>
            <Text mb={4} textAlign="center">
              In the meantime, you can engage with us on social media:
            </Text>
            <Link href="https://www.linkedin.com/company/radii/" passHref>
              <Flex as="a" alignItems="center" justifyContent="center">
                <FaLinkedin />
                <Text ml={2}>@radii</Text>
              </Flex>
            </Link>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {successMessage && (
        <div className="absolute bottom-10 bg-green-500 text-white p-4 rounded-md">{successMessage}</div>
      )}
      {error && <div className="absolute bottom-10 bg-red-500 text-white p-4 rounded-md">{error}</div>}
    </div>
  );
};

export function SubFooter() {
  return (
    <div className="w-full text-white py-4 text-center">
      <p>© 2024 Radii. All rights reserved.</p>
    </div>
  );
}

export default Footer;