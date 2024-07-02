import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const pricingOptions = [
  {
    name: "Freemium",
    integrations: "File Upload & Google drive(1 folder)",
    queries: "100/month",
    views: "5",
    accounts: "2 Users",
    support: "Chat & Email support with a 24-hour response time",
    storage: "Up to 250 MB",
    buttonText: "Get Started",
    text: "Start free trial today",
    price: "$0/month",
  },
  {
    name: "Standard",
    integrations: "Access to all supported data sources",
    queries: "1000/month",
    views: "50",
    accounts: "15 Users",
    support: "Priority chat & email support with a 12-hour response time",
    storage: "Up to 5 GB",
    buttonText: "Get Started",
    text: "Start free trial today",
    price: "$25/month",
  },
  {
    name: "Enterprise",
    integrations: "Unlimited access to all supported data sources, including custom integrations",
    queries: "Unlimited queries",
    views: "Unlimited",
    accounts: "Unlimited users",
    support: "Dedicated account manager and 24/7 support",
    storage: "15 GB (Custom storage solutions tailored to business needs)",
    buttonText: "Get Started",
    text: "Start free trial today",
    price: "Contact Sales for Pricing",
  },
]

export function PricingMobile() {
  return (
    <section className="bg-gray-50">
       <br />
       <br />
      <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <p className='text-[#F27405] text-center font-light py-10'>OUR PRICING</p>
        <br />
        
      </div>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {pricingOptions.map((option, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="text-center flex flex-col gap-3">
                      <h2 className="text-2xl mt-2">{option.name}</h2>
                      <p>{option.integrations}</p>
                      <span className="text-4xl font-semibold text-[#038C7F]">{option.price}</span>
                      <p>{option.queries}</p>
                      <p>{option.views}</p>
                      <p>{option.accounts}</p>
                      <p>{option.support}</p>
                      <p>{option.storage}</p>
                      {/* <ul className="mt-2">
                        {option.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul> */}
                      <button className="mt-4 px-4 py-2 bg-transparent border border-[#F27405] text-[#F27405] rounded-full">{option.buttonText}</button>
                      <p className="mt-2 text-sm">{option.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <br />
      <br />
      <div id="header" data-aos="fade-up" data-aos-duration="2000">
        <p className=' text-center font-light py-10 text-sm'>Additional tokens may be purchsed for high frequency users (Contact sales for a custom plan)</p>
        <br />
        <br />
      </div>
    </section>
  )
}
