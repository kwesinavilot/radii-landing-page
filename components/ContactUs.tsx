import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import {
  Center,
  Spinner,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

function ContactUs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-out-cubic',
    });
  }, []);

  function addToContacts(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phoneNumber = (form.elements.namedItem("phonenumber") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // Email validation (basic check for format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      alert("Please enter a valid email address.");
      return;
    }

    // Remove non-digit characters
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Check for valid lengths (12 digits including country code)
    if (!(digitsOnly.length === 12 && phoneNumber.startsWith("+"))) {
      setIsSubmitting(false);
      alert("A valid phone number is required. Should be 13 digits including country code. Eg: +2348012345678 or +2336012345678");
      return;
    }

    // Check for message
    if (message.length <= 2) {
      setIsSubmitting(false);
      alert("Your message should be 2 or more characters long.");
      return;
    }

    // Prepare data to send
    const data = {
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };

    fetch("https://backend.getradii.com/auxi/contacts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsSubmitted(true);
          onOpen(); // Open the modal on successful submission
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <section id="Contact Us" className="lg:px-8 bg-gray-50 py-10">
      <div className="flex flex-col lg:flex-row lg:my-24 my-4 w-[75%] mx-auto">
        <div>
          {isSubmitting ? (
            <Center h="100%">
              <Spinner
                thickness="5px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#e58a13"
                size="xl"
              />
            </Center>
          ) : (
            <Card className="lg:w-[410px] lg:h-[550px]" style={{ boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }} data-aos="zoom-out">
              <CardHeader>
                <CardTitle className="text-base lg:text-2xl font-bold text-[#F27405]">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <form method="POST" onSubmit={addToContacts}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" placeholder="Eg: maku@agriguard.com" />
                    </div>
                    <br />
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="phonenumber">Phone Number</Label>
                      <Input id="phonenumber" name="phonenumber" placeholder="Eg: +2348012345678 or +2336012345678" />
                    </div>
                    <br />
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="message">Your Message</Label>
                      <div className="grid w-full gap-2">
                        <Textarea name="message" placeholder="Eg: I would like to book a demo..." />
                        <br />
                        <Button type="submit" style={{ backgroundColor: '#F27405' }}>Send message</Button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="my-4 text-center -order-1 lg:order-2 lg:w-[50%] mx-auto lg:py-12 lg:px-8 self-center">
          <h1 className="text-[#0A1117] font-bold text-2xl text-center lg:text-start lg:text-5xl">Let's Discuss How Radii Can Help Your Business</h1>
          <p className="text-[#0A1117] font-light text-l text-center lg:text-start my-1 lg:my-4">Start your journey towards data-driven decision-making.
            Contact us today for a personalized consultation.</p>
          <div className="flex row justify-between ">
            <div className="flex items-center justify-start lg:justify-start my-1 gap-4">
                <MdOutlineLocationOn style={{ color: '#F27405' }} />
                <p className="text-sm">Accra, Ghana</p>
            </div>
            <div className="flex items-center justify-start lg:justify-start my-1 gap-4">
              <AiOutlineMail style={{ color: '#F27405',  }} />
              <p className="text-sm">oyinlade@getradii.com </p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.5)" alignItems="center" justifyContent="center" />
        <ModalContent bg="white">
        <br /><br />
          <ModalHeader className="font-bold text-4xl text-center">Message Received!</ModalHeader>
          <br />
          <ModalBody>
            <Text className=" text-sm text-center">
              Thank you for reaching out to us. We have received your message and will get back to you shortly.
            </Text>
            <Text className=" text-sm text-center">
              In the meantime, you can engage with us on social media:
            </Text>
            <Link href="https://www.linkedin.com/company/urubyte/" isExternal flex={1}>
            <br />
            <Flex alignItems="center" justifyContent="center">
              <FaLinkedin />
              <Text className="text-sm text-center">@urubytes</Text>
            </Flex>

            </Link>
          </ModalBody>
          <br /><br />
          <ModalFooter alignItems="center" justifyContent="center">
            <Button onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
          <br /><br />
        </ModalContent>
      </Modal>
    </section>
  );
}

export default ContactUs;
