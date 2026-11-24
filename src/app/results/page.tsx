import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { resultsData } from "@/data/testimonials";
import { Award } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "ACCA & Finance Exam Results | SKD Group of Institutions Chandigarh",
  description:
    "Explore verified examination results, official student scorecards, merit rankers, and pass rates at SKD Group of Institutions. Consistently outperforming ACCA global averages.",
  alternates: {
    canonical: "/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Results & Achievements" }]} />

      <div className="space-y-16 pb-20 bg-[#F6F4EF]">
        <section className="bg-gradient-to-b from-white to-[#F6F4EF] py-14 border-b border-[#172238]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-[#D8C6AA]/25 text-[#172238] border border-[#D8C6AA]/50 rounded-full text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#3659D9]" />
              <span>Verified Examination Performance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172238] tracking-tight">
              SKD Results: Proof, Not Promises
            </h1>
            <p className="text-base text-[#767C88] mt-3 leading-relaxed">
              We publish verified batch clearances, top rankers, and official scorecard proofs from recent ACCA, CA, and US CMA examination sessions.
            </p>
          </div>
        </section>

        {/* Global vs SKD Comparison */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#172238] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3659D9]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <span className="text-xs font-bold text-[#D8C6AA] uppercase tracking-wider block mb-2">
                  Performance Benchmark
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Consistently Outperforming Global Pass Rates
                </h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  While global ACCA pass rates typically average between 45% and 53% for Applied Skills and Strategic Professional levels, SKD students achieve an 85%+ overall batch pass rate through rigorous mock drills and individualized mentorship.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <span className="text-3xl sm:text-5xl font-extrabold text-slate-400 block mb-1">
                    ~50%
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">Global ACCA Average</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#3659D9] to-[#2442B0] rounded-2xl border border-blue-400/40 shadow-lg shadow-blue-950/40">
                  <span className="text-3xl sm:text-5xl font-extrabold text-[#D8C6AA] block mb-1">
                    85%+
                  </span>
                  <span className="text-xs text-white font-bold">SKD Batch Average</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Scorecards, Videos & Batch Records */}
        <ResultsClient resultsData={resultsData} />

        {/* Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Results Page" />
        </section>
      </div>
    </>
  );
}
