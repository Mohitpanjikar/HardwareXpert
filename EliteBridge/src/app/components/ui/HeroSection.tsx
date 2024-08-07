import Link from "next/link";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { Button } from "@/app/components/ui/moving-border.tsx";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          EliteBridge Business Solutions India LLP </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          EliteBridge is an e-commerce marketplace aim towards simplifying &
          optimizing procurement of industrial goods & supplies, especially in
          the MRO, spares, and consumables segment, across multiple product
          categories such as electrical, mechanical, hardware, safety, lighting,
          and many more.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
