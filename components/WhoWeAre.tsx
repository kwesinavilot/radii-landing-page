// src/components/WhoWeAre.js
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const WhoWeAre = () => {
  return (
    <section id='About' className='relative bg-gray-50 lg:p-20 lg:my-16 my-44 py-40'>
      <div className="absolute right-44 top-0 hidden lg:block">
        <Image src="/images/middlestars.png" alt="Middle Stars" className="lg:p-10" width={225} height={245} />
      </div>
      <div className="text-center relative z-10">
        <div id="who-we-are">
        <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <p className='text-[#F27405] text-center font-rubik font-light pt-6 pb-2'>WHO WE ARE</p>
        <br />
      </div>
          <h1 className='text-[#14183E]  text-3xl lg:text-5xl font-volkhov font-bold my-4'>Empowering Businesses <br />with Data-Driven Insights</h1>
        </div>
   
        <div className='lg:flex flex flex-col lg:flex-row items-center gap-6 justify-center'>
          <Card className='w-[267px] h-[314px] rounded-3xl border-none shadow-lg relative z-20'>
            <CardHeader>
              <div className='w-fit mx-auto my-10'>
                  <Image src="/images/icons/er.png" alt="Effortless Reporting" width={50} height={50} />
              </div>
              <CardTitle className='text-xl font-bold font-rubik'>Effortless Reporting</CardTitle>
              <CardDescription className='font-rubik w-40 mx-auto'>Easily create tailored market reports by on industries and regions in minutes</CardDescription>
            </CardHeader>
          </Card>
          <Card className='w-[267px] h-[314px] rounded-3xl border-none shadow-lg relative z-20'>
              <CardHeader>
                <div className='w-fit mx-auto my-10'>
                    <Image src="/images/icons/TI Icon.png" alt="Effortless Reporting" width={50} height={50} />
                </div>
                <CardTitle className='text-xl font-bold font-rubik'>Tailored Insights</CardTitle>
                <CardDescription className='font-rubik'>Supercharge your enterprise decision making process with data
                  and artificial intelligence solutions built on your own data.</CardDescription>
              </CardHeader>
          </Card>
          <Card className='w-[267px] h-[314px] rounded-3xl border-none shadow-lg relative z-20'>
            <CardHeader>
              <div className='w-fit mx-auto my-10'>
                  <Image src="/images/icons/SI Icon.png" alt="Effortless Reporting" width={50} height={50} />
              </div>
              <CardTitle className='text-xl font-bold font-rubik'>Seamless Integrations</CardTitle>
              <CardDescription className='font-rubik'>Integrate your diverse data sources into a simple and unified interface to speed up decision making</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className='absolute bottom-10 left-[18%] z-0 hidden lg:block'>
        <Image className='mx-auto justify-center' src="/images/reccut.png" alt="Description of Image" width={950} height={950} />
      </div>
    </section>
  );
};

export default WhoWeAre;
