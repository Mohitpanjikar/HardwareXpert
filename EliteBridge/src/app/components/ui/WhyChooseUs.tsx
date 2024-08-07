"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const eliteBridgeContent = [
  {
    title: 'Comprehensive Employee Management',
    description:
      'Manage employee information, attendance, payroll, and more with ease. Our solution provides a centralized platform to handle all aspects of employee management efficiently.',
  },
  {
    title: 'Advanced Analytics & Reporting',
    description:
      'Gain valuable insights into your workforce with advanced analytics and reporting tools. Make informed decisions with real-time data on employee performance, attendance trends, and payroll statistics.',
  },
  {
    title: 'Streamlined Payroll Processing',
    description:
      'Simplify payroll processing with automated calculations and compliance checks. Ensure accurate and timely salary disbursements while adhering to regulatory requirements.',
  },
  {
    title: 'Flexible Leave Management',
    description:
      'Implement a robust leave management system that accommodates various leave policies. Allow employees to easily request and track leave while managers can approve and manage requests seamlessly.',
  },
  {
    title: 'Enhanced Employee Self-Service',
    description:
      'Empower employees with self-service portals to access their information, submit requests, and track their performance. Reduce administrative burden and improve employee satisfaction with transparent and accessible tools.',
  },
  {
    title: 'Secure & Scalable Solutions',
    description:
      'Ensure the security of your employee data with robust encryption and access controls. Our scalable solutions grow with your organization, providing reliable performance and data integrity at all times.',
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={eliteBridgeContent} />
    </div>
  );
}

export default WhyChooseUs;
