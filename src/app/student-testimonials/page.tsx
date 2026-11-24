import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { Star } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews | SKD Group of Institutions Chandigarh",
  description:
    "Read genuine reviews, watch video testimonials, and view verified feedback from ACCA, Data Analytics, and Finance students at SKD Group of Institutions.",
  alternates: {
    canonical: "/student-testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Student Testimonials" }]} />

      <div className="space-y-16 pb-20 bg-[#F6F4EF]">
        <section className="bg-gradient-to-b from-white to-[#F6F4EF] py-14 border-b border-[#172238]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#D8C6AA]/25 text-[#172238] border border-[#D8C6AA]/50 rounded-full text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D8C6AA] text-[#D8C6AA]" />
              <span>Authentic Student Experiences</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172238] tracking-tight">
              Student Testimonials & Reviews
            </h1>
            <p className="text-base text-[#767C88] mt-3 leading-relaxed">
              Real stories, video reflections, and verified software reviews from students who attended classroom coaching at Godrej Eternia, Chandigarh and through our live interactive batches.
            </p>
          </div>
        </section>

        {/* Client Interactive Component with Videos, Verified Reviews & Lightbox Proofs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsClient />
        </div>

        {/* Lead Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Testimonials Page" />
        </section>
      </div>
    </>
  );
}
