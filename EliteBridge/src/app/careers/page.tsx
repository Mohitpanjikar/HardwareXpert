import { cn } from "@/app/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import {
  IconBriefcase,
  IconUserPlus,
  IconUsers,
  IconChartLine,
  IconGlobe,
} from "@tabler/icons-react";

// Define the Skeleton component
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// Update items with career information
const items = [
  {
    title: "Software Engineer",
    description: "Develop and maintain innovative software solutions. Collaborate with a dynamic team to create cutting-edge applications.",
    header: <Skeleton />,
    icon: <IconUserPlus className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Project Manager",
    description: "Lead and coordinate projects from inception to completion. Ensure successful delivery of projects within scope, time, and budget.",
    header: <Skeleton />,
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UX/UI Designer",
    description: "Design intuitive and engaging user experiences. Work closely with developers to create visually appealing and user-friendly interfaces.",
    header: <Skeleton />,
    icon: <IconUserPlus className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Marketing Specialist",
    description: "Develop and execute marketing strategies to promote our products and services. Analyze market trends and customer needs to drive growth.",
    header: <Skeleton />,
    icon: <IconChartLine className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HR Manager",
    description: "Manage recruitment, employee relations, and organizational development. Foster a positive work environment and ensure compliance with HR policies.",
    header: <Skeleton />,
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customer Support Specialist",
    description: "Provide exceptional support to our clients. Resolve issues, answer questions, and ensure a high level of customer satisfaction.",
    header: <Skeleton />,
    icon: <IconUserPlus className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Analyst",
    description: "Analyze and interpret complex data to inform business decisions. Utilize data visualization and statistical tools to provide actionable insights.",
    header: <Skeleton />,
    icon: <IconGlobe className="h-4 w-4 text-neutral-500" />,
  },
];

// Export the BentoGridDemo component with updated content
export function BentoGridDemo() {
  return (
    <div className="pt-40"> {/* Adjust the padding as needed */}
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoGridDemo;
