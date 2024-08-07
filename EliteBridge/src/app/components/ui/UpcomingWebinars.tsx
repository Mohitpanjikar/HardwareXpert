'use client'
import Link from "next/link"
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

function EliteBridgeServices() {

  const eliteBridgeServices = [
    {
      title: 'MRO Supplies',
      description:
        'Simplifying and optimizing the procurement of maintenance, repair, and operations supplies.',
      slug: 'mro-supplies',
      isFeatured: true,
    },
    {
      title: 'Electrical Supplies',
      description:
        'Wide range of electrical products to meet your industrial needs.',
      slug: 'electrical-supplies',
      isFeatured: true,
    },
    {
      title: 'Mechanical Supplies',
      description:
        'Comprehensive selection of mechanical components and equipment.',
      slug: 'mechanical-supplies',
      isFeatured: true,
    },
    {
      title: 'Hardware Supplies',
      description:
        'High-quality hardware products for various industrial applications.',
      slug: 'hardware-supplies',
      isFeatured: true,
    },
    {
      title: 'Safety Supplies',
      description:
        'Ensuring workplace safety with top-notch safety products.',
      slug: 'safety-supplies',
      isFeatured: true,
    },
    {
      title: 'Lighting Solutions',
      description:
        'Innovative lighting solutions for industrial environments.',
      slug: 'lighting-solutions',
      isFeatured: true,
    },
    {
      title: 'Material Handling Solutions',
      description:
        'Efficient material handling solutions to streamline operations.',
      slug: 'material-handling-solutions',
      isFeatured: true,
    },
    {
      title: 'Inventory Management',
      description:
        'Advanced inventory management with industrial vending solutions.',
      slug: 'inventory-management',
      isFeatured: true,
    },
    {
      title: 'Factory Automation',
      description:
        'Cutting-edge factory automation systems to enhance productivity.',
      slug: 'factory-automation',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SERVICES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Services We Provide</p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={eliteBridgeServices.map(service => (
              {
                title: service.title,
                description: service.description,
                link: `/${service.slug}`
              }
            ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EliteBridgeServices;
