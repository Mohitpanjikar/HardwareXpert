'use client'
import Link from "next/link"
import equipmentData from "@/app/data/stock_course.json"
import { BackgroundGradient } from "@/app/components/ui/background-gradient"

// Defining our own object, called interface 
interface Equipment {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    manufacturer: string,
    isFeatured: boolean,
}

function FeaturedEquipment() {
    const featuredEquipment = equipmentData.equipment.filter((item: Equipment) => item.isFeatured)

    return (
        <div className="py-12 bg-black">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED EQUIPMENT</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore Top Equipment</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredEquipment.map((item: Equipment) => (
                        <div key={item.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Manufacturer: {item.manufacturer}</p>
                                    <Link href={`/equipment/${item.slug}`} className="text-teal-600 hover:underline">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/equipment"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All Equipment
                </Link>
            </div>
        </div>
    )
}

export default FeaturedEquipment;
