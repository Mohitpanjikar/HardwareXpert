'use client'
import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const eliteBridgeTestimonials = [
  {
    quote:
      'EliteBridge made our procurement process seamless and efficient. The range of products and the quality of service are unmatched!',
    name: 'David Clark',
    title: 'Procurement Manager',
  },
  {
    quote:
      'Working with EliteBridge has been a game-changer for us. Their commitment to understanding our needs and providing tailored solutions is commendable.',
    name: 'Sarah Johnson',
    title: 'Operations Director',
  },
  {
    quote:
      'The industrial supplies we get from EliteBridge are top-notch. Their customer support team is always ready to help, ensuring we never face any downtime.',
    name: 'Mark Robinson',
    title: 'Maintenance Supervisor',
  },
  {
    quote:
      'EliteBridge’s automation solutions have significantly improved our factory’s efficiency. We couldn’t be happier with the results!',
    name: 'Emily Davis',
    title: 'Production Manager',
  },
  {
    quote:
      'From enquiry to delivery, EliteBridge handles everything with professionalism and attention to detail. Highly recommended!',
    name: 'James Wilson',
    title: 'Logistics Coordinator',
  },
];

function EliteBridgeTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Buyer Satisfaction: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={eliteBridgeTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default EliteBridgeTestimonialCards;
